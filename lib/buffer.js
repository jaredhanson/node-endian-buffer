function EndianBuffer(size, endian) {
  this.buffer = new Buffer(size);
  this.readUInt8 = this.buffer.readUInt8.bind(this.buffer);
  this.readInt8 = this.buffer.readInt8.bind(this.buffer);
  
  if (endian == 'le' || endian == 'little' || endian == 'lsb') {
    this.readUInt16 = this.buffer.readUInt16LE.bind(this.buffer);
    this.readUInt32 = this.buffer.readUInt32LE.bind(this.buffer);
    this.readInt16 = this.buffer.readInt16LE.bind(this.buffer);
    this.readInt32 = this.buffer.readInt32LE.bind(this.buffer);
    this.readFloat = this.buffer.readFloatLE.bind(this.buffer);
    this.readDouble = this.buffer.readDoubleLE.bind(this.buffer);
  } else {
    this.readUInt16 = this.buffer.readUInt16BE.bind(this.buffer);
    this.readUInt32 = this.buffer.readUInt32BE.bind(this.buffer);
    this.readInt16 = this.buffer.readInt16BE.bind(this.buffer);
    this.readInt32 = this.buffer.readInt32BE.bind(this.buffer);
    this.readFloat = this.buffer.readFloatBE.bind(this.buffer);
    this.readDouble = this.buffer.readDoubleBE.bind(this.buffer);
  }
}

/**
 * Export `Buffer`.
 */
module.exports = EndianBuffer;
