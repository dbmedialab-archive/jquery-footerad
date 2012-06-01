#README

Plugin for å vise annonser i bunnen av en side. Annonsen vises basert på tidsintervaller og animeres inn fra bunnen av siden.

#####Styling:  
*div-elementet som inneholder annonsen må ha et minimum med styling. Høyde og bredde må settes. Bruk <code>display: none;</code> på elementet slik at det ikke vises når siden lastes inn. Plugin legger på <code>position: fixed</code> og <code>bottom: -<height-of-div>px</code> når den initsialiseres.*

	<style>
		#footerad{
			width: 980px;
			height: 150px;
			display: none;
		}
	</style>

#####Bruk:  
*<code>cu</code> må angis.*
	
	$('#mydiv').footerad({ cu: xxxx });

#####Valg:
	
	$('#mydiv').footerad({
		cu: xxxx,				 // Content unit fra Emidiate
		frame: [				 // Array com kan inneholde flere 'frames'
			{ 
				interval: 30000, // Hvor ofte annonsen skal vises. 
				duration: 10000  // Hvor lenge annonsen skal vises.
			},
			{ 
				interval: 60000, // Hvor ofte annonsen skal vises. 
				duration: 15000  // Hvor lenge annonsen skal vises.
			},
			…
		],
		speed: 250,				 // Hastihet inn og ut på animasjon av annonsen.
		loop: false,			 // Indikerer om 'frame' skal loopes eller ikke.
		debug: false			 // Viser konsollmeldinger.
	});