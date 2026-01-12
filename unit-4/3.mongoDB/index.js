import mongoose from "mongoose";
import dotenv from "dotenv";
import Course from "./course.js";

dotenv.config();

async function main() {
    await mongoose.connect('mongodb://localhost:27017/practiceDB');
    console.log("MongoDB connected");

    const sampleCourse = await Course.create({
        title: "Full Stack Development",
        instructor: "John Doe",
        students: ["Alice", "Bob", "Charlie"]
    });

    console.log("Inserted Course:", sampleCourse);

    const courses = await Course.find();
    console.log("All Courses:", courses);

}

main();