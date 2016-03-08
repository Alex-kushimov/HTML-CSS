var dreadnough = [
  [[1,2,3], [10,11,12], [20,21,22],],
  [["one","two","three"], ["four","five","six"], ["seven","eight","nine"],],
  [["I", "II", "III"],["VI","V","VI"],["VII","VIII","IX"]],
];

 for (var i = 0; i < dreadnough.length; i++) {
    
    for (var t = 0; t < dreadnough[i].length; t++) {

        for (var a = 0; a < dreadnough[t].length; a++) { 
            console.log(dreadnough[i][t][a]);
        };
    };
};