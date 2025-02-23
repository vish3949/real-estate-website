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
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Search,
  DollarSign,
  Truck,
  ShieldCheck,
  Star,
  User,
  Mail,
  Phone,
  PawPrint,
  Heart,
  Package,
} from "lucide-react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function PetProductSellPage() {
  const [priceRange, setPriceRange] = useState([0, 100]);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">
              Find the Perfect Products for Your Pet
            </h1>
            <p className="text-xl mb-8">
              Discover high-quality pet supplies for your furry, feathered, or
              scaly friends
            </p>
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-6">
                <form className="flex flex-wrap gap-4">
                  <Input
                    type="text"
                    placeholder="Search products"
                    className="flex-grow"
                  />
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Pet Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dog">Dog</SelectItem>
                      <SelectItem value="cat">Cat</SelectItem>
                      <SelectItem value="bird">Bird</SelectItem>
                      <SelectItem value="fish">Fish</SelectItem>
                      <SelectItem value="small-animal">Small Animal</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="food">Food</SelectItem>
                      <SelectItem value="toys">Toys</SelectItem>
                      <SelectItem value="accessories">Accessories</SelectItem>
                      <SelectItem value="health">Health & Wellness</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button type="submit" className="w-full sm:w-auto">
                    Search Products
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Shop with PetPals?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <DollarSign className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">
                    Best Price Guarantee
                  </h3>
                  <p className="text-gray-600">
                    We offer competitive prices on a wide range of pet products
                    to fit every budget.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Truck className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">
                    Fast & Free Shipping
                  </h3>
                  <p className="text-gray-600">
                    Enjoy free shipping on orders over $50 and quick delivery to
                    your doorstep.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <ShieldCheck className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">
                    Quality Guaranteed
                  </h3>
                  <p className="text-gray-600">
                    All our products are carefully selected to ensure the best
                    quality for your pets.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Featured Pet Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=200&width=400`}
                    alt={`Product ${i}`}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {i % 2 === 0 ? "Premium Pet Food" : "Interactive Pet Toy"}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      For{" "}
                      {i % 3 === 0
                        ? "Dogs"
                        : i % 3 === 1
                        ? "Cats"
                        : "Small Pets"}
                    </p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-bold">
                        ${(19.99 + i * 5).toFixed(2)}
                      </span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span className="ml-1">{4 + (i % 2) * 0.5}/5</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button size="lg">View All Products</Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              How to Order
            </h2>
            <Tabs defaultValue="browse" className="max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="browse">Browse</TabsTrigger>
                <TabsTrigger value="add">Add to Cart</TabsTrigger>
                <TabsTrigger value="checkout">Checkout</TabsTrigger>
                <TabsTrigger value="deliver">Delivery</TabsTrigger>
              </TabsList>
              <TabsContent value="browse">
                <Card>
                  <CardHeader>
                    <CardTitle>Browse Our Selection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Explore our wide range of pet products</li>
                      <li>Use filters to narrow down your search</li>
                      <li>Read product descriptions and reviews</li>
                      <li>Compare prices and features</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="add">
                <Card>
                  <CardHeader>
                    <CardTitle>Add Items to Your Cart</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Click "Add to Cart" for desired items</li>
                      <li>Adjust quantities as needed</li>
                      <li>Review your cart contents</li>
                      <li>Continue shopping or proceed to checkout</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="checkout">
                <Card>
                  <CardHeader>
                    <CardTitle>Complete Your Purchase</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Enter your shipping information</li>
                      <li>Choose your preferred payment method</li>
                      <li>Apply any discount codes</li>
                      <li>Review and confirm your order</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="deliver">
                <Card>
                  <CardHeader>
                    <CardTitle>Delivery and Enjoyment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Receive order confirmation and tracking info</li>
                      <li>Track your package in real-time</li>
                      <li>Receive your pet products</li>
                      <li>Enjoy your new items with your furry friend!</li>
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
                <AccordionTrigger>What is your return policy?</AccordionTrigger>
                <AccordionContent>
                  We offer a 30-day return policy for most items. If you're not
                  satisfied with your purchase, you can return it for a full
                  refund or exchange. Please note that some items, such as
                  opened pet food or used litter, may not be eligible for return
                  due to hygiene reasons.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How long does shipping take?
                </AccordionTrigger>
                <AccordionContent>
                  Shipping times vary depending on your location and the items
                  ordered. Generally, orders are processed within 1-2 business
                  days, and standard shipping takes 3-5 business days. Expedited
                  shipping options are available at checkout for faster
                  delivery.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Do you offer international shipping?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we offer international shipping to select countries.
                  Shipping rates and delivery times vary by destination. Please
                  note that some products may not be available for international
                  shipping due to regulations or restrictions in certain
                  countries.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Are your products safe for pets?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, all of our products are carefully selected with pet
                  safety in mind. We work with reputable brands and
                  manufacturers who adhere to strict quality and safety
                  standards. However, it's always important to supervise your
                  pet with new toys or products and consult with your
                  veterinarian if you have any concerns about a specific item.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah M.",
                  text: "PetPals has the best selection of cat toys! My kitties love everything I've bought from here.",
                },
                {
                  name: "Mike R.",
                  text: "The quality of the dog food I purchased is excellent. My pup's coat has never looked better!",
                },
                {
                  name: "Emily L.",
                  text: "Fast shipping and great customer service. I'll definitely be a repeat customer!",
                },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <User className="h-8 w-8 text-primary mb-4" />
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
                Join Our Newsletter
              </h2>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <Input type="text" placeholder="Your Name" required />
                    <Input type="email" placeholder="Your Email" required />
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Pet Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dog">Dog</SelectItem>
                        <SelectItem value="cat">Cat</SelectItem>
                        <SelectItem value="bird">Bird</SelectItem>
                        <SelectItem value="fish">Fish</SelectItem>
                        <SelectItem value="small-animal">
                          Small Animal
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <Checkbox id="terms">
                      <Checkbox.Indicator />
                      <span className="ml-2">
                        I agree to receive promotional emails
                      </span>
                    </Checkbox>
                    <Button type="submit" size="lg" className="w-full">
                      Subscribe
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
