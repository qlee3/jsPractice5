
function f1() {
  this.a = 1
}

f1.prototype.b = 2

function f3() {
  this.c = 3
}

function f4() {
  this.d = 4
}

f3.prototype = new f1()
f3.prototype.e = 5
f4.prototype = new f3()

const f = new f4()

console.log(f)
console.log(f.a)
console.log(f.b)
console.log(f.c)
console.log(f.d)
console.log(f.e)
