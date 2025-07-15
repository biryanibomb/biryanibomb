import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Star, User } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Reviews = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const sampleReviews = [
    {
      name: "Nikita",
      location: "Pune",
      rating: 5,
      comment: "3 cubes, 3 guests, 0 stress. This is a game changer for my dinner parties!",
      avatar: "N"
    },
    {
      name: "Karan",
      location: "Delhi", 
      rating: 5,
      comment: "Best shortcut to real biryani! The Hyderabadi flavor is exactly like my grandmother's recipe.",
      avatar: "K"
    },
    {
      name: "Priya",
      location: "Bangalore",
      rating: 4,
      comment: "Love the Lucknowi variant! Perfect for my weekend meals. Will definitely order again.",
      avatar: "P"
    },
    {
      name: "Arjun",
      location: "Mumbai",
      rating: 5,
      comment: "Hostel life just got better! No more expensive food delivery. Thank you Biryani Bombs!",
      avatar: "A"
    },
    {
      name: "Sneha",
      location: "Chennai",
      rating: 5,
      comment: "The Kolkata flavor is amazing! Sweet and aromatic, just how I like it.",
      avatar: "S"
    },
    {
      name: "Rahul",
      location: "Hyderabad",
      rating: 4,
      comment: "Great product! Saves so much time on busy weekdays. The spice level is perfect.",
      avatar: "R"
    }
  ];

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Review Submitted!",
      description: "Thank you for your feedback. Your review will be published soon.",
    });
  };

  const renderStars = (count: number, interactive = false) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 cursor-pointer transition-colors ${
          index < (interactive ? (hoveredRating || rating) : count)
            ? "fill-kesar-gold text-kesar-gold"
            : "text-clay-brown/30"
        }`}
        onClick={interactive ? () => setRating(index + 1) : undefined}
        onMouseEnter={interactive ? () => setHoveredRating(index + 1) : undefined}
        onMouseLeave={interactive ? () => setHoveredRating(0) : undefined}
      />
    ));
  };

  return (
    <section className="py-20 px-4 bg-subtle">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">What People Are Saying</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Review Form */}
          <div className="card-premium">
            <h3 className="text-2xl font-bold text-clay-brown mb-6 font-heading">
              Share Your Experience
            </h3>
            
            <form onSubmit={handleSubmitReview} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-clay-brown mb-2">
                  Your Name
                </label>
                <Input 
                  placeholder="Enter your name"
                  className="border-clay-brown/20 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-clay-brown mb-2">
                  Rating
                </label>
                <div className="flex gap-1">
                  {renderStars(rating, true)}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-clay-brown mb-2">
                  Your Review
                </label>
                <Textarea 
                  placeholder="Tell us about your Biryani Bombs experience..."
                  className="border-clay-brown/20 focus:border-primary min-h-[120px]"
                />
              </div>
              
              <Button type="submit" className="btn-hero w-full">
                Submit Review
              </Button>
            </form>
          </div>
          
          {/* Sample Reviews */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-clay-brown mb-6 font-heading">
              Customer Reviews
            </h3>
            
            <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
              {sampleReviews.map((review, index) => (
                <Card key={index} className="border-clay-brown/10 hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                        {review.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-clay-brown">
                            {review.name}
                          </span>
                          <span className="text-clay-brown/60 text-sm">
                            {review.location}
                          </span>
                        </div>
                        <div className="flex gap-1 mb-2">
                          {renderStars(review.rating)}
                        </div>
                        <p className="text-clay-brown/80 text-sm leading-relaxed">
                          "{review.comment}"
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;