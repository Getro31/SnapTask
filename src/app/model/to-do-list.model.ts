export class TaskModel{
  id!: number;
  title!:string;
  description!:string;
  imageUrl!: string;
  uploadAt!:Date;
  snaps!: number
  location?: string;
}