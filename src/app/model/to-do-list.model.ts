export class TaskModel{
  id!: number;
  title!:string;
  description!:string;
  imageUrl!: string;
  createdDate!:Date;
  snaps!: number
  location?: string;
}