"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Home,
  Search,
  DollarSign,
  Key,
  MapPin,
  Bed,
  Bath,
  Square,
  ArrowRight,
  Star,
} from "lucide-react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogHeader,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const featuredProperties = [
  {
    id: 1,
    title: "Cat",
    address: "123 Main St, Cityville, USA",
    price: 12000,
    beds: 2,
    baths: 2,
    sqft: 1000,
    image: "/cat.jpg",
  },
  {
    id: 2,
    title: "Golden Retriver",
    address: "456 Oak Rd, Townsville, USA",
    price: 8000,
    beds: 4,
    baths: 3,
    sqft: 2500,
    image: "/th.jpg",
  },
  {
    id: 3,
    title: "Mini Rex",
    address: "789 Pine Ave, Metropolis, USA",
    price: 5000,
    beds: 1,
    baths: 1,
    sqft: 500,
    image: "/asd.jpg",
  },
];

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    text: "Pawfect Pet Shop helped me find the perfect furry friend. Their service was amazing!",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "I got all the essentials for my new puppy from Pawfect Pet Shop. The quality and variety were top-notch!",
  },
  {
    id: 3,
    name: "Mike Johnson",
    text: "Adopting my kitten through Pawfect Pet Shop was a delightful experience. They made everything so simple and stress-free!",
  },
];

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/dogs.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="relative h-[600px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Featured Property ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Find Your Dream Friend
              </h1>
              <p className="text-xl mb-8">
                Discover the perfect companion with paws & claws
              </p>
              <Card className="max-w-4xl mx-auto bg-white/90 backdrop-blur">
                <CardContent className="p-6">
                  <Tabs defaultValue="buy">
                    <TabsList className="grid w-full grid-cols-3 mb-4">
                      <TabsTrigger value="buy">Buy</TabsTrigger>
                      <TabsTrigger value="daycare">Day Care</TabsTrigger>
                      <TabsTrigger value="sell">Pet Essentials</TabsTrigger>
                    </TabsList>
                    <TabsContent value="buy">
                      <form className="flex flex-wrap gap-4">
                        <Input
                          type="text"
                          placeholder="Enter location"
                          className="flex-grow"
                        />
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Pet Type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="house">Dog</SelectItem>
                            <SelectItem value="apartment">Cat</SelectItem>
                            <SelectItem value="condo">Rabbit</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button type="submit">
                          <Search className="mr-2 h-4 w-4" /> Search
                        </Button>
                      </form>
                    </TabsContent>
                    <TabsContent value="daycare">
                      <form className="flex flex-wrap gap-4">
                        <Input
                          type="text"
                          placeholder="Enter location"
                          className="flex-grow"
                        />
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Hours" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="studio">6</SelectItem>
                            <SelectItem value="1">12</SelectItem>
                            <SelectItem value="2">24</SelectItem>
                            <SelectItem value="3">48</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button type="submit">
                          <Search className="mr-2 h-4 w-4" /> Search
                        </Button>
                      </form>
                    </TabsContent>
                    <TabsContent value="sell">
                      <form className="flex flex-wrap gap-4">
                        <Input
                          type="text"
                          placeholder="Enter your needed item"
                          className="flex-grow"
                        />
                        <Button type="submit">Search</Button>
                      </form>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Choose DreamHome Realty?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <DollarSign className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Best Value</h3>
                  <p className="text-gray-600">
                    We offer competitive prices on all our products, ensuring
                    you get the best value for your money.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Key className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Quality</h3>
                  <p className="text-gray-600">
                    We only stock high-quality products from trusted brands,
                    ensuring the best for your pet.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Easy Process</h3>
                  <p className="text-gray-600">
                    Browse our extensive range of products from the comfort of
                    your own home.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Glimpse of our pets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProperties.map((property) => (
                <Card key={property.id} className="overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {property.title}
                    </h3>

                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">
                        Rs.{property.price.toLocaleString()}
                      </span>
                      <Button variant="outline">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button size="lg">
                View All Pets <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id}>
                  <CardContent className="p-6">
                    <Star className="h-8 w-8 text-yellow-400 mb-4" />
                    <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                    <p className="font-semibold">{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Find Your Dream Companion?
            </h2>
            <p className="text-xl mb-8">
              Let us help you navigate the real world of paws and claws.
            </p>
            <Button size="lg" variant="secondary">
              Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
