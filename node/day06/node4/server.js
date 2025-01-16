let buf = Buffer.alloc(10);
buf.write("hello12345678");
console.log(buf);
console.log(buf.toString());

let buf2 = Buffer.from('Welcome to buffering');
console.log(buf2);
console.log(buf2.toJSON());
