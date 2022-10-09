export class MarkDown {
    name: string;
   
    constructor(name: string) {
      this.name = name;
    }
   
    async get_content(): Promise<string> {
        try {
            let file = require(`./../content/${this.name}.md`);
            let content: string = '';
            await fetch(file)
                .then(response => {
                    return response.text();
                })
                .then(text => {
                    content = text
                })
            return content
        } catch (_) {
            return `Could not find ${this.name}`
        }
    }
    
  }
   