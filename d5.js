(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"d5_atlas_1", frames: [[0,0,1920,1080],[0,1082,1211,679]]},
		{name:"d5_atlas_2", frames: [[1691,1288,300,300],[973,1395,285,285],[1278,1355,300,300],[0,677,1395,138],[0,957,1325,131],[0,347,1528,328],[0,817,1395,138],[0,0,1608,345],[331,1090,319,319],[973,1090,303,303],[652,1090,319,319],[331,1411,234,176],[0,1415,222,167],[567,1411,234,176],[0,1090,329,323],[1691,893,289,393],[1530,480,415,411],[1397,893,292,460],[1610,0,364,478]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_1024 = function() {
	this.initialize(img.CachedBmp_1024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2409,156);


(lib.CachedBmp_1023 = function() {
	this.initialize(img.CachedBmp_1023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3099,138);


(lib.CachedBmp_2276 = function() {
	this.initialize(img.CachedBmp_2276);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3243,177);


(lib.CachedBmp_1021 = function() {
	this.initialize(ss["d5_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1020 = function() {
	this.initialize(ss["d5_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1019 = function() {
	this.initialize(ss["d5_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1018 = function() {
	this.initialize(ss["d5_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1016 = function() {
	this.initialize(ss["d5_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1015 = function() {
	this.initialize(ss["d5_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1014 = function() {
	this.initialize(ss["d5_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1017 = function() {
	this.initialize(ss["d5_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1012 = function() {
	this.initialize(ss["d5_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1011 = function() {
	this.initialize(ss["d5_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1010 = function() {
	this.initialize(ss["d5_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1009 = function() {
	this.initialize(ss["d5_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1008 = function() {
	this.initialize(ss["d5_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1007 = function() {
	this.initialize(ss["d5_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Buten = function() {
	this.initialize(ss["d5_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Honi = function() {
	this.initialize(ss["d5_atlas_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Mori = function() {
	this.initialize(ss["d5_atlas_2"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Temee = function() {
	this.initialize(ss["d5_atlas_2"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.tuslamjbox = function() {
	this.initialize(ss["d5_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.uher = function() {
	this.initialize(ss["d5_atlas_2"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Yama = function() {
	this.initialize(ss["d5_atlas_2"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.help_graphic = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.tuslamjbox();
	this.instance.setTransform(7,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,1,1211,679);


(lib.help_fade_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EijFBfMMAAAi+XMFGLAAAMAAAC+Xg");
	this.shape.setTransform(1043.775,609.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.help_fade_bg, new cjs.Rectangle(0,0,2087.6,1218.4), null);


(lib.btn_back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Close");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_1019();
	this.instance.setTransform(-43.3,-42.55,0.2782,0.2782);

	this.instance_1 = new lib.CachedBmp_1020();
	this.instance_1.setTransform(-42,-41.15,0.2782,0.2782);

	this.instance_2 = new lib.CachedBmp_1021();
	this.instance_2.setTransform(-43.3,-42.55,0.2782,0.2782);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.3,-42.5,83.5,83.4);


(lib.helpcopy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Click");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_1014();
	this.instance.setTransform(-232.4,-22.95,0.3333,0.3333);

	this.instance_1 = new lib.CachedBmp_1017();
	this.instance_1.setTransform(-268,-57.45,0.3333,0.3333);

	this.instance_2 = new lib.CachedBmp_1016();
	this.instance_2.setTransform(-220.75,-21.75,0.3333,0.3333);

	this.instance_3 = new lib.CachedBmp_1015();
	this.instance_3.setTransform(-254.6,-54.6,0.3333,0.3333);

	this.instance_4 = new lib.CachedBmp_1018();
	this.instance_4.setTransform(-232.4,-22.95,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_1},{t:this.instance_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-268,-57.4,536,115);


(lib.btnSubNext_yallow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Next_1");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_1010();
	this.instance.setTransform(-53.15,-53.15,0.3333,0.3333);

	this.instance_1 = new lib.CachedBmp_1011();
	this.instance_1.setTransform(-50.4,-50.6,0.3333,0.3333);

	this.instance_2 = new lib.CachedBmp_1012();
	this.instance_2.setTransform(-53.15,-53.15,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.1,-53.1,106.30000000000001,106.30000000000001);


(lib.Blue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EggFAgBMAAAhACMBALAAAMAAABACg");
	mask.setTransform(205.425,204.95);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#4528B8","#457CEC"],[0,1],-177.3,-102.4,177.4,102.4).s().p("EgAJAgAQmhgCl7ijQlviekakcQkbkdiZlwQifl+ACmfQACmhCjl7QCdlvEdkaQEdkaFwiaQF+ieGfABQGhACF8CjQFuCeEaEcQEaEdCaFwQCfF+gCGfQgCGhijF7QidFvkdEaQkdEalwCaQl5CdmbAAIgJAAg");
	this.shape.setTransform(205.1,204.75);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Blue, new cjs.Rectangle(0.3,0,409.59999999999997,409.5), null);


(lib.Btn_Sound_blue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_1007();
	this.instance.setTransform(-39.65,-32.4,0.3333,0.3333);

	this.instance_1 = new lib.Blue();
	this.instance_1.setTransform(0.25,0.2,0.3034,0.3034,0,0,0,205.7,205.2);

	this.instance_2 = new lib.CachedBmp_1008();
	this.instance_2.setTransform(-37.65,-30.9,0.3333,0.3333);

	this.instance_3 = new lib.CachedBmp_1009();
	this.instance_3.setTransform(-39.65,-32.4,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{regX:205.7,regY:205.2,scaleX:0.3034,scaleY:0.3034}},{t:this.instance}]}).to({state:[{t:this.instance_1,p:{regX:205.6,regY:205.1,scaleX:0.2882,scaleY:0.2882}},{t:this.instance_2}]},1).to({state:[{t:this.instance_1,p:{regX:205.7,regY:205.2,scaleX:0.3034,scaleY:0.3034}},{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.1,-62,124.6,124.3);


(lib.help = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {run:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
		var _this = this
		_this.help_back.addEventListener("click", CallBackHome);
		_this.btnSound.addEventListener("click", ClickSound2);
		function ClickSound2(evt) {
		
			_this.playSound("d5_sound", "voice", true, {
				volume: 1,
				loop: 0
			});
			}
		function CallBackHome(evt) {
			//console.log("back home..")
			_this.help_back.removeEventListener("click", CallBackHome)
			_this.gotoAndStop(0);
			_this.visible = false;
		
		}
		_this.playSound = function (linkage, type, stopPrevious, props) {
			if (!props)
				props = {};
			if (stopPrevious && _this[type])
				_this[type].stop();
		
			_this[type] = createjs.Sound.play(linkage, props);
		};
		_this.stopsSound = function (linkage, type, stopPrevious) {
		
			if (stopPrevious && _this[type])
				_this[type].stop();
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(1));

	// btn
	this.instance = new lib.uher();
	this.instance.setTransform(-112.95,-110.05,0.5788,0.5788);

	this.instance_1 = new lib.CachedBmp_1023();
	this.instance_1.setTransform(-516.8,164.5,0.3333,0.3333);

	this.instance_2 = new lib.CachedBmp_2276();
	this.instance_2.setTransform(-546.2,159.1,0.3333,0.3333);

	this.instance_3 = new lib.Temee();
	this.instance_3.setTransform(360.95,-68.05,0.506,0.5059);

	this.instance_4 = new lib.Mori();
	this.instance_4.setTransform(136.95,-80.05,0.6228,0.6228);

	this.instance_5 = new lib.Honi();
	this.instance_5.setTransform(-570.95,-68.05,0.6079,0.6079);

	this.instance_6 = new lib.Yama();
	this.instance_6.setTransform(-350.95,-98.05,0.5494,0.5495);

	this.btnSound = new lib.Btn_Sound_blue();
	this.btnSound.name = "btnSound";
	this.btnSound.setTransform(-0.05,-279.9,0.9657,0.9657,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.btnSound, 0, 1, 2);

	this.help_back = new lib.btn_back();
	this.help_back.name = "help_back";
	this.help_back.setTransform(802.4,-423.85,1.1983,1.1982);
	new cjs.ButtonHelper(this.help_back, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.help_back},{t:this.btnSound},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},11).wait(1));

	// Layer_2
	this.instance_7 = new lib.help_fade_bg();
	this.instance_7.setTransform(-0.05,-0.1,0.9197,0.8864,0,0,0,1043.7,609.1);
	this.instance_7.alpha = 0.0117;
	this.instance_7._off = true;
	new cjs.ButtonHelper(this.instance_7, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(11).to({_off:false},0).wait(1));

	// Layer_1
	this.instance_8 = new lib.help_graphic("synched",0);
	this.instance_8.setTransform(612.5,-351.3,0.0756,0.0756,0,0,0,605.5,339.4);
	this.instance_8.alpha = 0;

	this.instance_9 = new lib.CachedBmp_1024();
	this.instance_9.setTransform(-401.4,-196,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_8},{t:this.instance_9}]},11).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:339.5,scaleX:1.4,scaleY:1.4,x:-7,y:-1,alpha:1},11).wait(1));

	// Layer_5
	this.instance_10 = new lib.help_fade_bg();
	this.instance_10.setTransform(-0.05,-0.1,0.9197,0.8864,0,0,0,1043.7,609.1);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:0.5508},11).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-540,1920,1080);


// stage content:
(lib.d5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {d5:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var _this = this;
		
		_this.btnHelp.addEventListener("click", CallHelp);
		
		function CallHelp() {
		
			_this.help.visible = true;
			_this.help.gotoAndPlay("run");
		
			//_this.stopsSound("storyd1", "voice", true);
		}
		_this.btnNext.addEventListener("click", f3_MouseClickHandler.bind(this));
		
		function f3_MouseClickHandler() {
			window.location.href = "ending.html";
		}
		_this.btnBack.addEventListener("click", f4_MouseClickHandler.bind(this));
		
		function f4_MouseClickHandler() {
			window.location.href = "d4.html";
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// help
	this.help = new lib.help();
	this.help.name = "help";
	this.help.setTransform(960,540);

	this.timeline.addTween(cjs.Tween.get(this.help).wait(1));

	// title
	this.btnHelp = new lib.helpcopy();
	this.btnHelp.name = "btnHelp";
	this.btnHelp.setTransform(960,137.5);
	new cjs.ButtonHelper(this.btnHelp, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnHelp).wait(1));

	// btn
	this.btnNext = new lib.btnSubNext_yallow();
	this.btnNext.name = "btnNext";
	this.btnNext.setTransform(1814.9,995.1,0.8455,0.8455,0,0,180,0.1,0.1);
	new cjs.ButtonHelper(this.btnNext, 0, 1, 2);

	this.btnBack = new lib.btnSubNext_yallow();
	this.btnBack.name = "btnBack";
	this.btnBack.setTransform(105.1,995.15,0.8455,0.8455,0,0,0,0.1,0.2);
	new cjs.ButtonHelper(this.btnBack, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnBack},{t:this.btnNext}]}).wait(1));

	// bg
	this.instance = new lib.Buten();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,960,540);
// library properties:
lib.properties = {
	id: '1C74F2B3CB1DA243BFF6F10034CC5513',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#5220D7",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_1024.png?1608541783125", id:"CachedBmp_1024"},
		{src:"images/CachedBmp_1023.png?1608541783125", id:"CachedBmp_1023"},
		{src:"images/CachedBmp_2276.png?1608541783125", id:"CachedBmp_2276"},
		{src:"images/d5_atlas_1.png?1608541783095", id:"d5_atlas_1"},
		{src:"images/d5_atlas_2.png?1608541783095", id:"d5_atlas_2"},
		{src:"sounds/Back.mp3?1608541783125", id:"Back"},
		{src:"sounds/Bad.mp3?1608541783125", id:"Bad"},
		{src:"sounds/Click.mp3?1608541783125", id:"Click"},
		{src:"sounds/Close.mp3?1608541783125", id:"Close"},
		{src:"sounds/d5_sound.mp3?1608541783125", id:"d5_sound"},
		{src:"sounds/Good.mp3?1608541783125", id:"Good"},
		{src:"sounds/Next.mp3?1608541783125", id:"Next"},
		{src:"sounds/Next_1.mp3?1608541783125", id:"Next_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1C74F2B3CB1DA243BFF6F10034CC5513'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;