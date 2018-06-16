const boardValue = (state = [], action) => {
  switch (action.type) {
      case 'ITEM_CLICKED':
      console.log(action.id);
      const deepCloneOfNestedObject = JSON.parse(JSON.stringify(state))


      var st=Object.assign(deepCloneOfNestedObject.clickValues);
      if(st[action.id].value=="-"){
         st[action.id].value=deepCloneOfNestedObject.turnvalue;
         calculateWinner(action.id,deepCloneOfNestedObject);

         deepCloneOfNestedObject.turnvalue= deepCloneOfNestedObject.turnvalue==="X"?"O":"X";
       }
         console.log("State",st,  "winner", deepCloneOfNestedObject.winner);
         deepCloneOfNestedObject.clickValues=st;
          return deepCloneOfNestedObject;
      case 'CLOSE_MODAL':
      var deepCloneOfNestedObject1 = JSON.parse(JSON.stringify(state))
      deepCloneOfNestedObject1.winner="-";
      deepCloneOfNestedObject1=resetBoard(deepCloneOfNestedObject1);
      console.log("resetWinner",deepCloneOfNestedObject1);

        return deepCloneOfNestedObject1;
    default:
      return state
  }
}
function resetBoard(deepCloneOfNestedObject1){
  deepCloneOfNestedObject1={
    clickValues:getvalues(),
    turnvalue:"X",
    winner:"-"
  }
  return deepCloneOfNestedObject1;
}

function getvalues(){
    var values=[];
    for(var i=0;i<100;i++){
      values[i]={
        key:i,
        value:"-"
    }
    }
    //console.log("values",values);
    return values;
}
function calculateWinner(pos,boardvalue){
  var flag;
  var cr;
  for(var i=0;i<5;i++){
    flag=true;
    for(var j=0;j<5;j++){
      cr=pos-j+i;
      console.log("CR:",cr,(pos/10),"i=",i,"j=",j);
      if(cr<((Math.floor(pos/10))*10)||cr>((Math.ceil(pos/10))*10)-1){
        flag=false;
        console.log("1");
        break;
      }
      console.log("Board",boardvalue);
      if(boardvalue.clickValues[cr].value!=boardvalue.turnvalue){
        console.log("-->",boardvalue.turnvalue,"++>",boardvalue.clickValues[cr])
        flag=false;
        console.log("2");
        break;
      }
    }
    if(flag==true){
      boardvalue.winner=boardvalue.turnvalue;
      console.log("Winner Hor:",boardvalue.turnvalue);
    }
  }


  for(var i=0;i<5;i++){
    flag=true;
    for(var j=0;j<5;j++){
      cr=pos-(j*10)+(i*10);
      //console.log("CR:",cr,(pos/10));
      if(cr<0||cr>99){
        flag=false;
        break;
      }
      if(boardvalue.clickValues[cr].value!=boardvalue.turnvalue){
        //console.log(cr, "-->",boardvalue.turnvalue,"++>",boardvalue.clickValues[cr])
        flag=false;
        break;
      }
    }
    if(flag==true){
      boardvalue.winner=boardvalue.turnvalue;
      console.log("Winner Ver:",boardvalue.turnvalue);
    }
  }

  for(var i=0;i<5;i++){
    flag=true;
    for(var j=0;j<5;j++){
      cr=pos-(j*11)+(i*11);
      if(cr<0||cr>99){
        flag=false;
        break;
      }
      if(boardvalue.clickValues[cr].value!=boardvalue.turnvalue){
        //console.log("-->",boardvalue.turnvalue,"++>",boardvalue.clickValues[cr])
        flag=false;
        break;
      }
    }
    if(flag==true){
      boardvalue.winner=boardvalue.turnvalue;
      console.log("Winner bt rt:",boardvalue.turnvalue,"cr= ",cr);
    }
  }

  for(var i=0;i<5;i++){
    flag=true;
    for(var j=0;j<5;j++){
      cr=pos-(j*9)+(i*9);
      if(cr<0||cr>99){
        flag=false;
        break;
      }
      if(boardvalue.clickValues[cr].value!=boardvalue.turnvalue){
        //console.log("-->",boardvalue.turnvalue,"++>",boardvalue.clickValues[cr])
        flag=false;
        break;
      }
    }
    if(flag==true){
      boardvalue.winner=boardvalue.turnvalue;
      console.log("Winner bt lf:",boardvalue.turnvalue,"cr= ",cr);
    }
  }

}
export default boardValue
