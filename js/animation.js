$(document).ready(function(){
	//animating of images file in IE cause strange behavior, so switch the images to draw graph in IE
	if(navigator.userAgent.indexOf("Opera") != -1 ||navigator.userAgent.indexOf("Firefox") != -1||navigator.userAgent.indexOf("Chrome") != -1) {
		//for images 
		$('#animation').drawImage({
		layer:true,
		name:'hedgehog1',
		  source: '../uploads/hedgehog1.jpg',
		  x: 85, y: 230
		})
		.drawImage({
		layer:true,
		name:'hedgehog2',
		  source: '../uploads/hedgehog2.jpg',
		  x: 250, y: 235,
		});
	
		$('#animation').animateLayer('hedgehog1',{
				x: 85, y: 230,
				scale: 0.3,
				rotate:-720
			},5000,function(layer){
				$('#animation').animateLayer('hedgehog1',{
				x: 85, y: 230,
				scale: 0.9
			},5000);
	  	});
		$('#animation').animateLayer('hedgehog2',{
				x: 250, y: 235,
				scale: 0.3,
				rotate:-720
			},2000,function(layer){
				$('#animation').animateLayer('hedgehog2',{
				x: 250, y: 230,
				scale: 1
			},2000);
	  	});
 	}
 	else{
 		$('canvas').drawEllipse({
 			layer:true,
 			name:'ellipse1',
			fillStyle: '#B89470',
			x: 210, y:330,
			width: 280, height: 90
		}).drawEllipse({
 			layer:true,
 			name:'ellipse2',
			fillStyle: '  #248F24 ',
			x: 210, y:260,
			width: 30, height: 120
		}).drawArc({
			layer:true,
 			name:'arc',
  			strokeStyle: '#248F24 ',
  			strokeWidth: 7,
  			x: 210, y: 250,
  			radius: 50,
  			start: 85, end: 270
		});

		$('#animation').animateLayer('ellipse2',{
				x: 210, y:210,
				scale: 2
		},5000).animateLayer('arc',{
				strokeWidth: 12,
				x: 210, y: 180,
  				radius: 100,
		},5000)		;	
 	}

  	//for circles and polygons
	$('#animation').drawArc({
		layer:true,
		groups:['circle'],
		name:'circle1',
		strokeStyle:'#AA6699',
		strokeWidth: 3,
		x:100,
		y:360,
		radius:20,
		fillStyle:'#FF6699'
	})
	.drawArc({
		layer:true,
		groups:['circle'],
		name:'circle2',
		strokeStyle:'#BB6699',
		strokeWidth: 3,
		x:450,
		y:200,
		radius:20,
		fillStyle:'#GG6699'
	})
	.drawArc({
		layer:true,
		groups:['circle'],
		name:'circle3',
		strokeStyle:'#CC6699',
		strokeWidth: 3,
		x:290,
		y:350,
		radius:20,
		fillStyle:'#HH6699'
	})
	.drawPolygon({
		layer:true,
		name:'polygon',
		fillStyle:'#CC0000',
		shadowColor: '#FC6009',
	  	shadowBlur: 15,
		x:520,
		y:70,
		radius:30,
		sides:10
	});

	$('canvas').animateLayerGroup('circle',{
		x:300, y:260,
		radius:30
	},5000).animateLayer('circle1',{
		x:50,
		y:50,
		radius:20
	},5000).animateLayer('circle2',{
		x:350,
		y:70,
		radius:15,
	},5000).animateLayer('circle3',{
		x:450,
		y:50,
		radius:10
	},5000);	

	$('#animation').animateLayer('polygon',{
		x:290,
		y:145,
		rotate:360
	},6000).animateLayer('polygon',{
		x:580,
		y:145,
		rotate:-360
	},6000);

	//draw text
	function drawgreeting(line1,line2,line3){
	$('canvas').drawText({
		layer:true,
		name:'line1',
		strokeStyle:'#CC00FF',
		strokeWidth: 3,
		fillStyle:'#JJ6699',
		x:510,
		y:165,
		fontSize:'22pt',
		fontFamily:'times, serif',
		text:line1,
	})
	.drawText({
		layer:true,
		name:'line2',
		strokeStyle:'#CC00FF',
		strokeWidth: 3,
		fillStyle:'#JJ6699',
		x:480,
		y:205,
		fontSize:'58pt',
		fontFamily:'Brush Script Std, times, serif',
		text:line2,
	})
	.drawText({
		layer:true,
		name:'line3',
		strokeStyle:'#CC00FF',
		strokeWidth: 3,
		fillStyle:'#JJ6699',
		x:530,
		y:255,
		fontSize:'24pt',
		fontFamily:'MV Boli,times, serif',
		text:line3,
	});
	}
	drawgreeting("Wishing you","Success","in your exam");
	//select background
	$('#image').change(function(){
		if($('#image').val()=='star'){
		$('canvas').drawImage({
			layer:true,
			groups:['image'],
			source: "../uploads/star.png",
			x:160,
			y:60,
			scale:0.5
		})
		.drawImage({
			layer:true,
			groups:['image'],
			source: "../uploads/star.png",
			x:200,
			y:70,
			scale:0.3
		});
		}
		else {
		$('canvas').drawImage({
			layer:true,
			groups:['image'],
			source: "../uploads/leaf.jpg",
			x:490,
			y:310,
			scale:0.8
		})
		.drawImage({
			layer:true,
			groups:['image'],
			source: "../uploads/leaf.jpg",
			x:390,
			y:350,
			scale:0.9
		});
		}//end if
	});//end change

	//click button
	$('#play').click(function(){	
	//change text
		$('canvas').removeLayer('line1')
		.removeLayer('line2')
		.removeLayer('line3');
		line1 = $('#line1').val();
		line2 = $('#line2').val();
		line3 = $('#line3').val();
		//make words a little bit narrow, if it is too long
		if (line1.length>16 ||line2.length>10||line3.length>22){
			$('#animation').scaleCanvas({
 		 		scaleX:0.95
			});
		}
		drawgreeting(line1,line2,line3);
			//for circles and polygon
		$('#animation').drawPolygon({
			layer:true,
			name:'polygon2',
			strokeStyle:'#AA6699',
			strokeWidth: 3,
			x:125,
			y:170,
			radius:15,
			sides:6,
			fillStyle:'#99FF99'
		})
		.drawPolygon({
			layer:true,
			name:'polygon3',
			strokeStyle:'#BB6699',
			strokeWidth: 3,
			x:325,
			y:150,
			radius:20,
			sides:8,
			fillStyle:'#99FF99'
		});
		$('#animation').animateLayer('polygon2',{
			x:125,
			y:170,
			rotate:36000
		},60000).animateLayer('polygon3',{
			x:325,
			y:160,
			rotate:-13500
		},60000);

	})//end click

	//click button to clear
	$('#clear').click(function(){
		$('#animation').restoreCanvas();
		$('canvas').removeLayer('polygon2')
		.removeLayer('polygon3')
		.removeLayer('line1')
		.removeLayer('line2')
		.removeLayer('line3')
		.removeLayerGroup('image');
		drawgreeting("Wishing you","Success","in your exam");
	});

});//end ready