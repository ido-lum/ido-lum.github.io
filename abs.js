class Section {

  constructor()
  {
    this.name = "section name";
    this.InstrumentCount = "3";
    this.Instruments = new Array("drums", "guitar","synths","vocals");
  };



  Draw()
  {
    RenderSection("section", this.name, this.name);
  };

  function RenderSection(target, name, value)
  {
    var div = document.createElement(target);
    div.style.background = "Yellow";
    div.innerHTML = "Section Name" + ": " + value;
    for(var i = 0; i < this.InstrumentCount; i++)
    {
      div.innerHTML += "</br><h2>"+this.Instruments[i]+"</h2><div>instrument info</div>";
    }
    
    document.getElementById("song").appendChild(div);
  };


  
};

class Song {

  constructor()
  {
    this.name = "song name";
  }

  Draw()
  {
    let s1 = new Section();
    let s2 = new Section();
    var div = document.createElement("section");
    div.id = "song";
    document.getElementById("song").appendChild(div);
    s1.Draw();
    s2.Draw();
  }
};





