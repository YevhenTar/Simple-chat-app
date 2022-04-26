import { ChatContact } from "./model";


export const CONTACTLIST: ChatContact[] = [
        {
            photo: "./../assets/img/alice.png",
            name: "Alice Freeman",
            messages: [{
                    id: true,
                    currentText: 'Quickly come to the meeting room 1B, we have a big server issue',
                    currentDate: new Date('6/12/17, 4:00 AM')
                },
                {
                    id: false,
                    currentText: 'I am having breakfast right now, can`t you wait for 10 minutes?',
                    currentDate: new Date('6/12/17, 4:05 AM')  
                },
                {
                    id: true,
                    currentText: 'You are the worst!',
                    currentDate: new Date('6/12/17, 4:10 AM')  
                }
            ]
        },
        {
            photo: "./../assets/img/josefina.png",
            name: "Josefina",
            messages: [{
                    id: true,
                    currentText: 'Quickly come to the meeting room 1B, we have a big server issue',
                    currentDate:new Date('4/22/17, 4:00 AM')
                },
                {
                    id: false,
                    currentText: 'I am having breakfast right now, can`t you wait for 10 minutes?',
                    currentDate: new Date('4/22/17, 4:05 AM')  
                },
                {
                    id: true,
                    currentText: 'We are loosing money! Quick!',
                    currentDate: new Date('4/22/17, 4:10 AM')
                }
            ]
        },
        {
            photo: "./../assets/img/velasques.png",
            name: "Velazques",
            messages: [{
                    id: true,
                    currentText: 'Hello. Can you help me?',
                    currentDate: new Date('3/18/17, 4:00 AM')
                },
                {
                    id: false,
                    currentText: 'I am having breakfast right now, can`t you wait for 10 minutes?',
                    currentDate: new Date('3/18/17, 4:05 AM')  
                },
                {
                    id: true,
                    currentText: 'Quickly come to the meeting room 1B, we have a big server issue',
                    currentDate: new Date('3/18/17, 4:10 AM')
                }
            ]
        },
        {
            photo: "./../assets/img/barrera.png",
            name: "Barrera",
            messages: [{
                    id: true,
                    currentText: 'Quickly come to the meeting room 1B, we have a big server issue',
                    currentDate: new Date('2/18/17, 4:00 AM')          
                },
                {
                    id: false,
                    currentText: 'I am having breakfast right now, can`t you wait for 10 minutes?',
                    currentDate: new Date('2/18/17, 4:05 AM')  
                },
                {
                    id: true,
                    currentText: 'I need your help. Call me.',
                    currentDate: new Date('2/18/17, 4:10 AM')
                }
            ]
        }
]


