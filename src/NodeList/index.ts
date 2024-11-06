/**
 * 实现链表
 */


export interface ILinkedList<T> {
  push(element: T): void; // 向链表尾部添加一个新元素
  removeAt(index: number): any; // 删除指定位置的元素
  remove(element: T): any; // 从链表移除一个元素
  insert(element: T, index: number): boolean; // 向链表指定位置插入元素
  getElementAt(index: number): Node<T> | null; // 返回链表指定位置的元素, 若找不到返回 null
  indexOf(element: T): number; // 返回链表指定元素的索引, 没有则返回 -1
  isEmpty(): boolean; // 判断链表是否为空
  size(): number; // 获取链表的长度
  getHead(): Node<T> | null; // 获取 head
  clear(): void; // 清空链表
  toString(): string; // 返回链表的字符串形式
}

// 节点类
// 一个链表节点包括当前元素和下一个元素的指针
export class Node<T> {
  constructor(public element: T, public next?: Node<T> | null) {
    this.element = element;
    this.next = null;
  }
}



export class LinkedList<T> implements ILinkedList<T> {
  protected head: Node<T> | null;
  protected count: number;

  constructor() {
    this.head = null;
    this.count = 0;
  }

  public push(element:T) {
    const node = new Node<T>(element);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      // 遍历查询到最后一个
      // 添加非空断言，head一定存在
      let current = this.head!;
      while (current?.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.count ++ ;
  }


  public remove(element: T): any {
    const index = this.indexOf(element);
    this.removeAt(index);
  }

  public removeAt(index: number): any {
    if(index < 0 || index > this.size() - 1) return null;
    if(index === 0) {
      this.head = this.head?.next!;
    } else {
      const previous = this.getElementAt(index - 1);
      const current = previous?.next!;
      (previous as Node<T>).next = current?.next;
    }
    this.count --;
  }

  public insert(element: T, index: number): boolean {
    // 索引越界
    if (index < 0 || index > this.size() - 1) return false;
    const node = new Node<T>(element);
    // 头部插入
    if(index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      // 找到原本上一个元素，previous ----> node ----> previous.next
      let previous = this.getElementAt(index - 1);
      node.next = previous!.next;
      previous!.next = node;
    }
    this.count ++;
    return true;
  }

  public indexOf(element: T): number {
    let current = this.head;
    for (let i = 0; i < this.size(); i++) {
      if(current && current?.element === element) {
        return i;
      }
      current = current?.next!;
    }
    return -1;
  }


  public isEmpty(): boolean {
    return this.count === 0;
  }

  public size(): number {
    return this.count;
  }

  public getElementAt(index: number): Node<T> | null {
    // 溢出
    if(index < 0 || index > this.size() - 1) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current?.next!;
    }
    return current;
  }

  public getHead(): Node<T> | null {
    return this.head;
  }

  public clear() {
    this.head = null;
    this.count = 0;
  }

  public toString(): string {
    if (this.head === null) {
      return "";
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size() && current !== null; i++) {
      objString = `${objString},${(current as Node<T>).element}`;
      current = (current as Node<T>).next;
    }
    return objString;
  }

}
