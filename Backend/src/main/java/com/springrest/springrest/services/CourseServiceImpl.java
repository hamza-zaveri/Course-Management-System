package com.springrest.springrest.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.CourseDao;
import com.springrest.springrest.entities.Course;

@Service
public class CourseServiceImpl implements CourseService{
	
	@Autowired
	private CourseDao courseDao;

//	List<Course> list;
	
	public CourseServiceImpl() {
//		list=new ArrayList<>();
//			list.add(new Course(145,"Java Core Course","This course contains basics of java"));
//			list.add(new Course(146,"Spring Boot Course","Learn how to create REST API"));
	}
	
	public List<Course> getCourses() {
		
		return courseDao.findAll();
		//		return list;
	}

	public Course getCourse(long courseId) {
//		Course course = null;
//		for(Course c:list) {
//			if(c.getId()==courseId) {
//				course=c;
//				break;
//			}
//		}
		return courseDao.getReferenceById(courseId);
	}

	public Course addCourse(Course course) {
//		list.add(course);
		courseDao.save(course);
		return course;
	}

	public Course updateCourse(Course course) {
//		for(Course c:list) {
//			if(c.getId()==course.getId()) {
//				c.setTitle(course.getTitle());
//				c.setDescription(course.getDescription());
//				break;
//			}
//		}
		courseDao.save(course);
		return course;
	}

	public void deletecourse(long parseLong) {
//		list=this.list.stream().filter(e->e.getId()!=parseLong).collect(Collectors.toList());
		Course entity = courseDao.getReferenceById(parseLong);
		courseDao.delete(entity);
		
	}

}
