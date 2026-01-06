import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const [submitted, setSubmitted] = useState(null);

  const handleSubmit = () => {
    setSubmitted(formData);
    setFormData({ name: "", email: "", feedback: "" });
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Feedback Form</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          placeholder="Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />
        <Input
          placeholder="Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
        <Textarea
          placeholder="Your Feedback"
          value={formData.feedback}
          onChange={(e) =>
            setFormData({ ...formData, feedback: e.target.value })
          }
        />
        <Button onClick={handleSubmit}>Submit</Button>

        {submitted && (
          <div className="mt-4 text-sm">
            <p><strong>Name:</strong> {submitted.name}</p>
            <p><strong>Email:</strong> {submitted.email}</p>
            <p><strong>Feedback:</strong> {submitted.feedback}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default FeedbackForm;
