import { Entity, PrimaryGeneratedColumn, Column, getRepository } from "typeorm";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  userName: string;

  @Column()
  password: string;

  @Column({ default: true })
  isAdmin: boolean;

  @Column({ default: null })
  token: string;

  //Password hashing function it calls when user signing up.
  async hashPassword() {
    try {
      const user = this;
      user.password = await bcrypt.hash(user.password, 8);

      return user;
    } catch (error) {
      throw new Error("Hashing pasword error");
    }
  }

  //This function gets userName and password parameters and check login needs.
  async findByCredentials(userName: string, password: string) {
    try {
      const user = await getRepository(User).findOne({ userName });

      if (!user) {
        throw new Error("User is not found");
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        throw new Error("Please check your username or password");
      }

      return user;
    } catch (error) {
      throw new Error("Credentials Error");
    }
  }

  //Create JWT function .
  async generateAuthToken(userAgent: string) {
    const user: User = this;
    const token: string = jwt.sign(
      { id: user.id, userAgent },
      process.env.JWT_SECRET_KEY as string
    ); //username eklemenin yolunu bul.

    if (!token) {
      throw new Error("Token can not created");
    }

    return token;
  }
}