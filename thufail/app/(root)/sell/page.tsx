"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Heart,
  PawPrint,
  Smile,
  Sun,
  Users,
  Calendar,
  Clock,
  MapPin,
} from "lucide-react";
import Header from "@/components/ui/header";

export default function PetDayCarePage() {
  const [petType, setPetType] = useState<string | null>(null);

  const handlePetTypeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setPetType(formData.get("petType") as string);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Pawsome Pet Day Care</h1>
            <p className="text-xl mb-8">
              Where your furry friends play, learn, and receive loving care
            </p>
            <Button size="lg" variant="secondary">
              Book a Visit
            </Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Choose Pawsome Pet Day Care?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Heart className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">
                    Loving Environment
                  </h3>
                  <p className="text-gray-600">
                    Our caring staff creates a warm and nurturing atmosphere
                    where your pets feel safe and loved.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <PawPrint className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Tailored Care</h3>
                  <p className="text-gray-600">
                    Personalized attention and activities suited to your pet's
                    breed, age, and personality.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Smile className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">
                    Fun and Engaging
                  </h3>
                  <p className="text-gray-600">
                    Exciting activities, playtime, and socialization to keep
                    your pet happy and entertained throughout the day.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Find the Right Program for Your Pet
            </h2>
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-6">
                <form onSubmit={handlePetTypeSubmit} className="space-y-4">
                  <Select name="petType" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Pet Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dog">Dog</SelectItem>
                      <SelectItem value="cat">Cat</SelectItem>
                      <SelectItem value="small-animal">Small Animal</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button type="submit" className="w-full">
                    Find Suitable Programs
                  </Button>
                </form>
                {petType && (
                  <div className="mt-6 text-center">
                    <h3 className="text-2xl font-bold mb-2">
                      Recommended Program
                    </h3>
                    <p className="text-3xl text-primary">
                      {petType === "dog"
                        ? "Canine Companions"
                        : petType === "cat"
                        ? "Feline Friends"
                        : "Small Pet Paradise"}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Contact us to learn more about our programs and
                      availability.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Pet Day Care Programs
            </h2>
            <Tabs defaultValue="dogs" className="max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="dogs">Dogs</TabsTrigger>
                <TabsTrigger value="cats">Cats</TabsTrigger>
                <TabsTrigger value="small-animals">Small Animals</TabsTrigger>
              </TabsList>
              <TabsContent value="dogs">
                <Card>
                  <CardHeader>
                    <CardTitle>Canine Companions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        Supervised play in spacious indoor and outdoor areas
                      </li>
                      <li>Basic obedience reinforcement</li>
                      <li>Socialization with other dogs</li>
                      <li>Rest periods and individual attention</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="cats">
                <Card>
                  <CardHeader>
                    <CardTitle>Feline Friends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Cozy cat condos for relaxation</li>
                      <li>Interactive toys and climbing structures</li>
                      <li>Gentle playtime and socialization</li>
                      <li>Quiet spaces for naps and alone time</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="small-animals">
                <Card>
                  <CardHeader>
                    <CardTitle>Small Pet Paradise</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Safe, species-specific enclosures</li>
                      <li>Appropriate diet and feeding schedules</li>
                      <li>Gentle handling and socialization</li>
                      <li>Enrichment activities suited to each species</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What are your operating hours?
                </AccordionTrigger>
                <AccordionContent>
                  Our pet day care center is open Monday through Friday from
                  7:00 AM to 7:00 PM, and Saturday from 9:00 AM to 5:00 PM. We
                  offer flexible drop-off and pick-up times to accommodate
                  various schedules.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What is your staff-to-pet ratio?
                </AccordionTrigger>
                <AccordionContent>
                  We maintain low staff-to-pet ratios to ensure each animal
                  receives proper attention and care. Our ratios vary by pet
                  type: 1:10 for dogs, 1:15 for cats, and 1:20 for small
                  animals, with additional staff for larger groups.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Do you provide meals for the pets?
                </AccordionTrigger>
                <AccordionContent>
                  We encourage pet owners to bring their pet's regular food to
                  maintain dietary consistency. However, we do offer
                  high-quality meals for an additional fee if needed. We always
                  provide fresh water and can accommodate any feeding schedule
                  or dietary restrictions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  How do you handle pet emergencies?
                </AccordionTrigger>
                <AccordionContent>
                  Our staff is trained in pet first aid and CPR. In case of an
                  emergency, we have protocols in place to provide immediate
                  care and contact both the pet owner and our partner veterinary
                  clinic. We always prioritize the health and safety of the pets
                  in our care.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              What Pet Parents Say About Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah T.",
                  text: "Pawsome Pet Day Care has been a lifesaver! My dog Max always comes home happy and tired after a day of play.",
                },
                {
                  name: "Michael R.",
                  text: "I was hesitant about day care for my cat, but the staff at Pawsome have been amazing. Luna actually looks forward to her visits now!",
                },
                {
                  name: "Emily L.",
                  text: "The small animal care at Pawsome is top-notch. My rabbits are always well-cared for, and the staff is knowledgeable about their needs.",
                },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <Users className="h-8 w-8 text-primary mb-4" />
                    <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                    <p className="font-semibold">{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Book a Visit or Enroll Your Pet
              </h2>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <Input type="text" placeholder="Your Name" required />
                    <Input type="email" placeholder="Your Email" required />
                    <Input type="tel" placeholder="Your Phone" required />
                    <Input type="text" placeholder="Pet's Name" required />
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Pet Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dog">Dog</SelectItem>
                        <SelectItem value="cat">Cat</SelectItem>
                        <SelectItem value="small-animal">
                          Small Animal
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <Input type="text" placeholder="Pet's Breed" required />
                    <Textarea placeholder="Any special requirements or questions?" />
                    <Button type="submit" size="lg" className="w-full">
                      Request Information
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
