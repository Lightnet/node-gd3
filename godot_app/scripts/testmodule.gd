extends Node

#var Module = {
  #'printg': "function(text) { alert('stdout: ' + text) }",
  #'printErrg': "function(text) { alert('stderr: ' + text) }"
#}

func _ready():
	var s = Summator.new()
	s.add(10)
	s.add(20)
	s.add(30)
	print(s.get_total())
	s.reset()
	# Called every time the node is added to the scene.
	# Initialization here
	pass

#func _process(delta):
#	# Called every frame. Delta is time since last frame.
#	# Update game logic here.
#	pass

func testprint():
	print("test")
