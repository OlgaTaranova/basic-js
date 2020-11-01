const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainContent: [],
  getLength() {
    return this.chainContent.length;
  },
  addLink(value) {
   let chainValue = (value === undefined) ? '' : value;
 
    if (this.chainContent.length == 0 || this.chainContent[this.chainContent.length - 1] == '~~') {
      this.chainContent.push(`( ${chainValue} )`);
    }else {
      this.chainContent.push('~~');
      this.chainContent.push(`( ${chainValue} )`);
     
    }
    return this;
  },
  removeLink(position) {
    try{
      if (Number.isInteger(position) == false || position < 0 || position >= this.chainContent.length) {
        throw new Error("ERROR: invalid position in removeLink accepted!");  
      } 
      this.chainContent.splice((position - 1) * 2, 2);
      return this;
    }catch(err) {
      console.log(err.message);
      this.chainContent.length = 0;
    }
    
  },
  reverseChain() {
    this.chainContent.reverse();
    return this;
  },
  finishChain() {
    
    if (this.chainContent[0] == '~~') {
      this.chainContent.splice(0, 1);
    }
     if (this.chainContent[this.chainContent.length-1] == '~~') {
      this.chainContent.splice(this.chainContent.length-1, 1);
    }
    let str = this.chainContent.join('');
    this.chainContent.length = 0;
    return str;
  }
};

module.exports = chainMaker;
