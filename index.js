function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

/* ranked-lists in this html doc are embedded in ul and then li tags.
   hence, to access the innerHTML elements, we have do something like this:

   document.querySelectorAll('.ranked-list')[i].children[j].innerHTML

   where 'i' is the ith ul element of the ranked-list class and 'j' is the
  jth li element of the ith ul element.
*/
function increaseRankBy(n){
  // we should use const to avoid our variable being changed.
  // however, doing so does not preclude the modification of inner elements.
  const rankedLists = document.querySelectorAll('.ranked-list');

  // rankedLists[i].children[j].innerHTML
  for(var i = 0; i < rankedLists.length; i++){
    for(var j = 0; j < rankedLists[i].children.length; j++){
      rankedLists[i].children[j].innerHTML = parseInt(rankedLists[i].children[j].innerHTML) + n;
    }
  }
}

/* This function implements a breadth-first search and accounts for multiple
nodes at different levels. But, it needs to be improved for the case where
there are multiple children all at the same depth.*/

function deepestChild(){
  let queue = [document.querySelector('#grand-node')];

  while(queue.length){
    let nextNode = queue.shift();
    let nextNodeLength = nextNode.children.length

    if(nextNodeLength){
      for(var i = 0; i < nextNodeLength; i++){
        queue.push(nextNode.children[i]);
      }
    }else if(!nextNodeLength && queue.length){
      continue;
    }else{
      return nextNode;
    }
  }
}
