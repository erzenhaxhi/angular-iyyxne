import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  data: any = [
    {
      name: '1',
      isRoot: true,
      visible: true,
      children: [
        {
          name: '[1] 2',
          age: '[1] 2',
          visible: true,
          children: [
            {
              name: '[1] [2] 3',
              age: '[1] [2] 3',
              visible: true,
            },
            {
              name: '[1] [2] 3',
              age: '[1] [2] 3',
              visible: true,
              children: [
                {
                  name: '[1] [2] [3] 4',
                  age: '[1] [2] [3] 4',
                },
                {
                  name: '[1] [2] [3] 4',
                  age: '[1] [2] [3] 4',
                  visible: true,
                  children: [
                    { name: '[1] [2] [3] [4] 5', age: '[1] [2] [3] [4] 5' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: '2',
      visible: true,
      isRoot: true,
      children: [
        {
          name: '[2] 2',
          age: '[2] 2',
        },
      ],
    },
  ];

  onClick(item) {
    item.visible = !item.visible;
    console.log(item);
  }

  parseStyle(item, level: number) {
    return {
      paddingLeft: !item?.isRoot ? `${10 * (level + 1)}px` : '',
    };
  }
}
