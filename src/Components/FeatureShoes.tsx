'use client'
import Link from "next/link"
import shoesData from "../data/shoes_data.json"
import { BackgroundGradient } from "./ui/background-gradient"

interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    image: string,
}

function FeatureShoes() {
    const featuredCourses = shoesData.courses.filter((course: Course) => course.isFeatured === true)


    return (
      <div className="py-12 bg-gray-900">
          <div>
              <div className="text-center">
                  <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED Shoes</h2>
                  <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Give comfort With the shoes</p>
              </div>
          </div>
          <div className="mt-10 mx-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                  {featuredCourses.map((course)=> (
                      <div key={course.id} className="flex justify-center">
                          <BackgroundGradient
                          className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                              <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                  <img src={course.image} alt="" />
                                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                  <Link href={`/courses/${course.slug}`}>
                                  Learn More
                                  </Link>
                              </div>
                          </BackgroundGradient>
                      </div>
                  ))}
              </div>
          </div>
          <div className="mt-20 text-center">
              <Link href={"/Shoes"}
              className="px-4 py-2 rounded border border-neutral-600 text-[#c84444cf] bg-white hover:bg-gray-400 transition duration-200 "
              >
              View All Shoes
              </Link>
          </div>
      </div>
    )
}

export default FeatureShoes
