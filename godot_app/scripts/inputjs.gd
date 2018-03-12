extends Node


func _ready():
	JavaScript.eval("""
    function Input(action){
        this.action=action
        this.processed=false
        this.data=""
    }

    function Input(action, processed, data){
        this.action=action
        this.processed=processed
        this.data=data
    }

    //starting input, doesn't need to be processed, so processed=true
    var input=new Input("default")
    input.processed=true

    function setInput(newInput){
        input=newInput
    }
    var godotInputActions=new Object()
""",true)

	# creates a js object containing strings for all godot actions
	# dont try to create inputs with other actions in js
	for action in InputMap.get_actions():
    	JavaScript.eval("""
        	godotInputActions.%s="%s"
    	""" % [action,action],true)
	pass
	
func _fetch_js_input():
	print("input?")
	pass