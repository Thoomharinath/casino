let symbolData= ["/diamond.jpg","/dot.jpg","/flower.jpg","/love.jpg"]



const getUrl=(url)=>{
    if (url==="diamond"){
      return symbolData[0]
    }else if(url==="dot"){
      return symbolData[1]
    }else if(url==="flower"){
      return symbolData[2]

    }else{
      return symbolData[3]

    }
  }


  export default getUrl