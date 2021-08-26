export default class Typewriter {

  static delay = 0
  
  static type(node, { speed = 20, delay = 0 }) {
    const valid = (
      node.childNodes.length === 1 &&
      node.childNodes[0].nodeType === Node.TEXT_NODE
    );
  
    if (!valid) {
      console.log(node)
      throw new Error(`This transition only works on elements with a single text node child`);
    }
    
    delay += Typewriter.delay

    const text = node.textContent;
    const duration = text.length * speed;
    
    Typewriter.delay += duration

    return {
      duration,
      delay,
      tick: t => {
        const i = ~~(text.length * t);
        node.textContent = text.slice(0, i);
      }
    }
  }
}