export class ChatMessage {
    id: boolean;
    currentText: string;
    currentDate: Date;
    constructor(id: boolean, currentText: string, currentDate: Date){
        this.id = id;
        this.currentText = currentText;
        this.currentDate = currentDate;
    }
}

export interface ChatContact {
    photo: string;
    name: string;
    messages: ChatMessage[] ;
}
