class Section {

  constructor()
  {
    this.len = 8;
  }

  Draw()
  {
    var div = document.createElement("section");
    div.style.background = "red";
    div.style.color = "blue";
    div.innerHTML = "<h2>section</h2><div>section name etc etc etc</div><div>section name etc etc etc</div>";
    document.getElementById("song").appendChild(div);
    }
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





