#README

Plugin for å vise annonser i bunnen av en side som vises på tidsintervall

Bruk:
	
	$('#mydiv').footerad();

Valg:
	
	$('#mydiv').footerad({
		cu: 9999,				// Content unit fra Emidiate
		frame: [
			{ 
				interval: 3000, // Hvor ofte annonsen skal vises. 
				duration: 10000 // Hvor lenge annonsen skal vises.
			},
			…
		],
		speed: 250,				// Hastihet på animasjon.
		loop: false,			// Indikerer om 'frame' skal loopes eller ikke.
		debug: false			// Viser konsollmeldinger.
	});