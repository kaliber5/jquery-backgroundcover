# History

* v1.0.0
	* Initial version

* v1.0.1
    * setSafearea method: change safearea after object initialization

* v1.0.2
    * changed the resize logic to not listen on the window resize event, instead poll for width/height changes of the element itself
    * new option "resizeInterval"
    
* v1.1
    * allow changing image via setImage()
    * calling plugin initialization on element with existing plugin will apply new options to existing plugin