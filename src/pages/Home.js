import React from 'react';
import '../sharedStyles.css';

const Home = () => {
  return (
    <div className="container">
    <div>
      <div className="title">
        <h1>Sveriges största utställning <br></br>med offentlig virtuell konst</h1><br></br>
      </div>
      <div className="text-container">
        <p>Vävda rum (Woven Places) is Sweden's first national exhibition in augmented reality. The project will display artworks at thousands of locations across Sweden, changing the experience of urban space with interventions ranging from sculptural social networks to hordes of reindeer and water spirits shaped by local climate data.</p>
      <p>The exhibition showcases new artworks by ten artists exhibited at over a thousand unique sites all over Sweden. You experience the art through this app. All artworks are interactive and use the latest technological developments within augmented reality, scalable networking infrastructures, and similar technologies to create an immersive experience beyond anything previously done in this field.</p>
      <p>Vävda rum is initiated by Riksförbundet Sveriges Konstföreningar with funding from Postkodsstiftelsen.</p>
      <p>The participating artists are Space Popular, Lundahl & Seitl, Oscar Häggström, Åsa Cederqvist, Untold Garden, Pastelae, Eric Magassa, James Webb, Adam James, SONG (Choterina Freer, Anna Kinbom and Rut Karin Zettergren in collaboration with Paola Torres Núñez del Prado and Rosalie Yu).</p>
      </div>
    </div>
    </div>
  );
};

export default Home;
