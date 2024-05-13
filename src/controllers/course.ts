
import { Request, Response } from "express";
import { Course } from "../schemas/course";

export const CourseController = {
  get: (req: Request, res: Response) => {
    Course.find((err, courses) => {
      if (err) {
        res.status(500).json({ code: 500, message: err });
      } else {
        res.json(courses);
      }
    });
  },

  // - GET - /courses/:id # Get specific course
  getCourse: (req: Request, res: Response) => {
    Course.findById(req.params.id, (err, course) => {
      if (err) {
        res.status(500).json({ code: 500, message: err });
      } else {
        res.json(course);
      }
    });
  },

  // - CREATE - /courses # Create a new course
  create: (req: Request, res: Response) => {
    const course = new Course(req.body);

    course.save((err) => {
      if (err) {
        res.status(500).json({ code: 500, message: err });
      } else {
        res.json(course);
      }
    });

  },

  // - UPDATE - /courses # Update a course
  update: (req: Request, res: Response) => {
    Course.findOneAndUpdate({ _id: req.body._id }, req.body, (err, course) => {
      if (err) {
        res.status(500).json({ code: 500, message: err });
      } else {
        res.json(true);
      }
    });
  },

  // - DELETE - /courses/:id # Delete a course
  delete: (req: Request, res: Response) => {

    Course.deleteOne({ _id: req.params.id }, (err) => {
      if (err) {
        res.status(500).json({ code: 500, message: err });
      } else {
        res.json(true);
      }
    });

  },
};
