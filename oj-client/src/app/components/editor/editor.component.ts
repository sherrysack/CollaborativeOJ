import { Component, OnInit } from '@angular/core';

declare var ace: any;
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})


export class EditorComponent implements OnInit{
  editor: any;
  languages: string[] = ['JAVA', 'Python', 'C++'];
  language: string = 'JAVA';
  sessionId: string;
  defaultContent = {
    'JAVA': `public class Example {
        public static void mySolution {
        // Type your code here
        }
    }`,
    'C++': `#include <iostream>
    using namespace std;
    int main() {
        // Type your code here
        return 0;
    }`,
    'Python': `class Solution:
    def Solution():
    # Write your Python code here`
  }

  languageBundle = {
    'JAVA': `java`,
    'C++': `c_cpp`,
    'Python': 'python'
  }


  constructor() { }

  ngOnInit() {
    this.editor = ace.edit('editor');
    this.editor.setTheme('ace/theme/eclipse');
    this.resetEditor();
    this.editor.$blockScrolling = Infinity;
  }

  public setLanguage(language: string): void {
    this.language = language;
    this.resetEditor();
  }
  public submit() {
    let userCode = this.editor.getValue();
    console.log(userCode);
  }
  public resetEditor() {
    this.editor.session.setMode('ace/mode/'+ this.languageBundle[this.language]);
    this.editor.setValue(this.defaultContent[this.language]);
  }
}
