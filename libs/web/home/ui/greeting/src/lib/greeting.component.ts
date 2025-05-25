import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'as-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GreetingComponent {
  get message() {
    const now = new Date();
    const hours = now.getHours();
    const text = hours < 12 ? 'Morning ð' : hours < 18 ? 'Afternoon ð¤' : 'Evening ð';
    return `Good ${text} ${randomEmoji()}`
  }
}

function randomEmoji(): string {
  const emojis: string[] = ["ð", "ð¤", "ð", "ð¤ª", "ð", "ð¤©", "ð¥³", "ð¤", "ð", "ð¥"];
  return emojis[Math.floor(Math.random() * emojis.length)];
}
