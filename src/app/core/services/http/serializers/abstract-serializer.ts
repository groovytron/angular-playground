export abstract class AbstractSerializer<Deserialized, Serialized> {
  abstract serialize(input: Deserialized): Serialized;
  abstract deserialize(input: Serialized): Deserialized;

  serializeMany(input: Deserialized[]): Serialized[] {
    return input.map((item) => this.serialize(item));
  }

  deserializeMany(input: Serialized[]): Deserialized[] {
    return input.map((item) => this.deserialize(item));
  }
}
