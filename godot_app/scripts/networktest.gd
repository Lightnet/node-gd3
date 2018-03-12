extends Control

# class member variables go here, for example:
# var a = 2
# var b = "textvar"

func _ready():
	# Called every time the node is added to the scene.
	# Initialization here
	#JavaScript.eval("alert('Calling JavaScript per GDScript!');")
	pass

#func _process(delta):
#	# Called every frame. Delta is time since last frame.
#	# Update game logic here.
#	pass


func _on_Button2_pressed():
	#var JavaScript = Globals.get_singleton("JavaScript")
	JavaScript.eval("alert('Calling JavaScript per GDScript!');")
	pass # replace with function body


func _on_Button_pressed():
	var s = Summator.new()
	s.add(10)
	s.add(20)
	s.add(30)
	print(s.get_total())
	s.reset()
	pass # replace with function body
