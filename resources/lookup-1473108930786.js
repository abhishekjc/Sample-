(function(window, undefined) {
  var dictionary = {
    "53c922b9-1bb8-49a0-bafc-ba21f0ad4ddf": "Investigation summary",
    "7fa7cbe2-259d-4276-9da4-e51890a17689": "Patient Complaint Mob",
    "52008479-5517-4859-847d-a7ea4085211d": "Chest pain",
    "851d59c6-c9b4-46fb-bb22-fa59f23be0a3": "Greetings",
    "8d54242f-ba3b-4e21-a63f-442847892837": "List system",
    "1bfa4735-856f-4325-9a40-84bdd206493f": "Patient Complaint",
    "0003bf52-0463-4f63-b748-bdb6b34cccd9": "Screen 1",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "home screen",
    "61637516-7160-41c4-b842-834b9d42ec08": "summary",
    "f4c51c7d-a272-49ff-96c5-041b79dfd71a": "Mode of communication",
    "f028e82b-9eee-48b9-8c87-0f562754dd47": "Chest Pain Anamnesis",
    "5e88fae3-5c67-4df9-9605-6ebb9b63e45e": "960 grid - 16 columns",
    "fa5048cf-9e32-42f2-a347-d4e732c2833d": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);