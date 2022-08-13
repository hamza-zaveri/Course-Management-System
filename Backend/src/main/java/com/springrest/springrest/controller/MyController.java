package com.springrest.springrest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.springrest.springrest.entities.Course;
import com.springrest.springrest.services.CourseService;

@CrossOrigin
@RestController
public class MyController {
	
	@Autowired
	private CourseService courseService;
	
//	@GetMapping("/home")
//	public String home() {
//		return "This is home page";
//				
//	}
	
	//get the courses
	@GetMapping("/courses")
	public List<Course> getCourses(){
		return this.courseService.getCourses();
	}
	
	@GetMapping("/courses/{courseId}")
	public Course getCourse(@PathVariable String courseId) {
		return this.courseService.getCourse(Long.parseLong(courseId));
	}
	
	@PostMapping("/courses")
	public Course addCourse(@RequestBody Course course) {
		return this.courseService.addCourse(course);
	}
	
	@PutMapping("/courses")
	public Course updateCourse(@RequestBody Course course) {
		return this.courseService.updateCourse(course);
	}
	
	@DeleteMapping("/courses/{courseId}")
	public void deleteCourse(@PathVariable String courseId){
			this.courseService.deletecourse(Long.parseLong(courseId));
	}
}
