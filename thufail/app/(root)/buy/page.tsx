"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  ThumbsUp,
  ArrowRight,
  SlidersHorizontal,
  PawPrintIcon as Paw,
} from "lucide-react";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { pets, Pet } from "@/app/data/pets";

export default function BuyPage() {
  const [priceRange, setPriceRange] = useState([0, 20]);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [filteredPets, setFilteredPets] = useState<Pet[]>(pets);
  const [currentPage, setCurrentPage] = useState(1);
  const petsPerPage = 9;
  const indexOfLastPet = currentPage * petsPerPage;
  const indexOfFirstPet = indexOfLastPet - petsPerPage;
  const currentPets = filteredPets.slice(indexOfFirstPet, indexOfLastPet);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredPets.length / petsPerPage);

  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Find Your Perfect Pet</h1>
            <p className="text-xl mb-8">
              Browse adoptable pets and find your new best friend.
            </p>
            <div className="max-w-3xl mx-auto flex items-center bg-white rounded-lg overflow-hidden shadow-lg">
              <Input
                type="text"
                placeholder="Enter pet type, breed, or keywords"
                className="flex-grow border-none focus:ring-0"
              />
              <Button size="lg" className="rounded-none">
                <Search className="mr-2 h-4 w-4" /> Search
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              <aside
                className={`w-full md:w-64 space-y-6 ${
                  isSidePanelOpen ? "block" : "hidden md:block"
                }`}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Filters</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Sort by</label>
                      <Select>
                        <SelectTrigger className="w-full mt-2">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="age-asc">
                            Age: Young to Old
                          </SelectItem>
                          <SelectItem value="age-desc">
                            Age: Old to Young
                          </SelectItem>
                          <SelectItem value="date-desc">
                            Newest Arrivals
                          </SelectItem>
                          <SelectItem value="date-asc">
                            Oldest Listings
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Age Range</label>
                      <Slider
                        min={0}
                        max={20}
                        step={1}
                        value={priceRange}
                        onValueChange={setPriceRange}
                        className="mt-2"
                      />
                      <div className="flex justify-between mt-2">
                        <span>{priceRange[0]} years</span>
                        <span>{priceRange[1]} years</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Pet Type</label>
                      <div className="space-y-2 mt-2">
                        {Array.from(new Set(pets.map((pet) => pet.type))).map(
                          (type) => (
                            <div key={type} className="flex items-center">
                              <Checkbox id={type} />
                              <label htmlFor={type} className="ml-2 text-sm">
                                {type}
                              </label>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Size</label>
                      <Select>
                        <SelectTrigger className="w-full mt-2">
                          <SelectValue placeholder="Any" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any</SelectItem>
                          <SelectItem value="small">Small</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="large">Large</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">
                        More Filters
                      </label>
                      <div className="space-y-2 mt-2">
                        {[
                          "Neutered/Spayed",
                          "Vaccinated",
                          "Good with Kids",
                          "Good with Other Pets",
                        ].map((feature) => (
                          <div key={feature} className="flex items-center">
                            <Checkbox id={feature} />
                            <label htmlFor={feature} className="ml-2 text-sm">
                              {feature}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full">Apply Filters</Button>
                  </CardContent>
                </Card>
              </aside>
              <div className="flex-grow space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">
                    Featured Pets for Adoption
                  </h2>
                  <Button
                    variant="outline"
                    className="md:hidden"
                    onClick={toggleSidePanel}
                  >
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    Filters
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentPets.map((pet) => (
                    <Card key={pet.id} className="overflow-hidden">
                      <img
                        src={pet.image || "/placeholder.svg"}
                        alt={`${pet.name} - ${pet.breed}`}
                        className="w-full h-48 object-cover"
                      />
                      <CardContent className="p-4">
                        <h3 className="text-xl font-semibold mb-2">
                          {pet.name}
                        </h3>
                        <p className="text-gray-600 mb-2">
                          {pet.breed} • {pet.age} years old
                        </p>
                        <div className="flex justify-between text-sm mb-4">
                          <span>{pet.size}</span>
                          <span>{pet.gender}</span>
                          <span>{pet.personality}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold">
                            Adoption Fee: ${pet.adoptionFee}
                          </span>
                          <Button variant="outline">View Details</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="flex justify-center mt-8">
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="border-2 p-2 rounded-md w-24 bg-green-400 border-green-400 hover:bg-green-300 disabled:bg-green-100 disabled:border-green-100"
                  >
                    Previous
                  </button>
                  <span className="mx-4 mt-2">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="border-2 p-2 rounded-md w-24 bg-green-400 border-green-400 hover:bg-green-300 disabled:bg-green-100 disabled:border-green-100"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Find Your Perfect Pet?
            </h2>
            <p className="text-xl mb-8">
              Our adoption specialists are here to help you find your new best
              friend.
            </p>
            <Button size="lg" variant="secondary">
              Schedule a Visit <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              What Our Adopters Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah T.",
                  text: "PetPals Adoption Center made finding my new furry friend so easy. Their care and support were amazing!",
                },
                {
                  name: "Michael R.",
                  text: "I couldn't be happier with my new pet. The team at PetPals went above and beyond to match me with the perfect companion.",
                },
                {
                  name: "Emily L.",
                  text: "The adoption process was smooth and stress-free thanks to the professionals at PetPals. Highly recommended!",
                },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <ThumbsUp className="h-8 w-8 text-primary mb-4" />
                    <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                    <p className="font-semibold">{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
