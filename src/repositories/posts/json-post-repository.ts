import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";

const POST_DIR = process.cwd()
const JSON_POST_FILE_PATH = resolve(
  POST_DIR,
  "src",
  "db",
  "seed",
  "posts.json"
)

export class JsonPostRepository implements PostRepository {


  private async readFromDisk(): Promise<PostModel[]> {

    const jsonContent = await readFile(JSON_POST_FILE_PATH, 'utf-8')
    const parseJson = JSON.parse(jsonContent)
    const { posts } = parseJson

    return posts
  }

  async findAll(): Promise<PostModel[]> {
    return await this.readFromDisk()
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this.findAll()
    const post = posts.find(post => post.id === id)

    if (!post) {
      throw new Error("Post não encontrado!")
    }
    return post
  }
}


export const postRepository = new JsonPostRepository();


