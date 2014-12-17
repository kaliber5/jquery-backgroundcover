module.exports = function(grunt) {

	grunt.initConfig({

		// Import package manifest
		pkg: grunt.file.readJSON("package.json"),

		// Banner definitions
		meta: {
			banner: "/*\n" +
				" *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
				" *  <%= pkg.description %>\n" +
				" *  <%= pkg.homepage %>\n" +
				" *\n" +
				" *  Made by <%= pkg.author %>\n" +
				" *  Under <%= pkg.license %> License\n" +
				" */\n"
		},

		// Concat definitions
		concat: {
			dist: {
				src: ["src/jquery.backgroundcover.js"],
				dest: "dist/jquery.backgroundcover.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},

		// Lint definitions
		jshint: {
			files: ["src/jquery.backgroundcover.js"],
			options: {
				jshintrc: ".jshintrc"
			}
		},

		// Minify definitions
		uglify: {
			my_target: {
				src: ["dist/jquery.backgroundcover.js"],
				dest: "dist/jquery.backgroundcover.min.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},

        bump: {
            options: {
                files: ['package.json','bower.json'],
                updateConfigs: ['pkg'],
                commit: true,
                commitMessage: 'Release v%VERSION%',
                commitFiles: ['-a'],
                createTag: true,
                tagName: '%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: true,
                pushTo: 'origin'
            }
        }


	});

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks('grunt-bump');

	grunt.registerTask("build", ["jshint", "concat", "uglify"]);
	grunt.registerTask("default", ["build"]);
	grunt.registerTask("travis", ["jshint"]);
    grunt.registerTask("release", "Release a new version, push it and publish it", function(target) {
        target = target || "patch";
        grunt.task.run("bump-only:"+target, "build", "bump-commit");
    });
};
