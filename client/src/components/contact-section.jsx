
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";
import emailjs from "emailjs-com";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { toast } = useToast();
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_7o41e5n",
        "template_6yaw6m5",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "D64ROrZ6dDAMmNDaR"
      )
      .then(() => {
        toast({
          title: "Message Sent",
          description: "I'll get back to you soon!",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: error.text || "Something went wrong.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
        />
        <Input
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
        />
        <Textarea
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
        />
        <Button
          type="submit"
          disabled={isSending}
          className="w-full bg-gradient-to-r from-primary to-purple-600"
        >
          <span className="flex items-center justify-center gap-2">
            {isSending ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
            {isSending ? "Sending..." : "Send Message"}
          </span>
        </Button>
      </form>
    </section>
  );
}



//import { useState } from "react";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Linkedin,
//   Github,
//   Globe,
//   Send,
//   Loader2,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";
// import { useMutation } from "@tanstack/react-query";
// import { apiRequest } from "@/lib/queryClient";

// export function ContactSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const { toast } = useToast();

//   const contactMutation = useMutation({
//     mutationFn: async (data) => {
//       const response = await apiRequest("POST", "/api/contact", data);
//       return response.json();
//     },
//     onSuccess: (data) => {
//       toast({
//         title: "Message sent successfully!",
//         description: data.message,
//       });
//       setFormData({ name: "", email: "", phone: "", message: "" });
//     },
//     onError: (error) => {
//       toast({
//         title: "Error sending message",
//         description: error.message,
//         variant: "destructive",
//       });
//     },
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     contactMutation.mutate(formData);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const contactInfo = [
//     {
//       icon: Mail,
//       title: "Email",
//       value: "tdeekshith46@gmail.com",
//       gradient: "from-blue-500 to-indigo-600",
//     },
//     {
//       icon: Phone,
//       title: "Phone",
//       value: "9963735220",
//       gradient: "from-green-500 to-emerald-600",
//     },
//     {
//       icon: MapPin,
//       title: "Location",
//       value: "Hyderabad, Telangana",
//       gradient: "from-purple-500 to-pink-600",
//     },
//   ];

//   const socialLinks = [
//     {
//       icon: Linkedin,
//       href: "https://linkedin.com/in/deekshiththonti",
//       bgColor: "bg-blue-600",
//     },
//     {
//       icon: Github,
//       href: "https://github.com/Deekshith-46",
//       bgColor: "bg-gray-800 dark:bg-gray-700",
//     },
//     {
//       icon: Globe,
//       href: "https://deekshith-46.github.io/Portfolio/",
//       bgColor: "bg-gradient-to-r from-primary to-purple-600",
//     },
//   ];

//   return (
//     <section id="contact" className="py-20 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Get In <span className="text-gradient">Touch</span>
//           </h2>
//           <p className="text-xl text-muted-foreground">
//             Let's work together on your next project
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           <div className="space-y-8">
//             <div className="glass-morphism p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
//               <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

//               <div className="space-y-6">
//                 {contactInfo.map((info, index) => (
//                   <div key={index} className="flex items-center">
//                     <div
//                       className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-full flex items-center justify-center mr-4`}
//                     >
//                       <info.icon className="w-5 h-5 text-white" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold">{info.title}</h4>
//                       <p className="text-muted-foreground">{info.value}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="flex gap-4 mt-8">
//                 {socialLinks.map((link, index) => (
//                   <a
//                     key={index}
//                     href={link.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`w-12 h-12 ${link.bgColor} text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300`}
//                   >
//                     <link.icon className="w-5 h-5" />
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="glass-morphism p-8 rounded-2xl">
//             <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-medium mb-2"
//                   >
//                     Name
//                   </label>
//                   <Input
//                     id="name"
//                     name="name"
//                     type="text"
//                     required
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     placeholder="Your full name"
//                     className="bg-white/10 dark:bg-black/10 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium mb-2"
//                   >
//                     Email
//                   </label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     required
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     placeholder="your.email@example.com"
//                     className="bg-white/10 dark:bg-black/10 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="block text-sm font-medium mb-2"
//                 >
//                   Phone Number
//                 </label>
//                 <Input
//                   id="phone"
//                   name="phone"
//                   type="tel"
//                   required
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   placeholder="+91 9876543210"
//                   className="bg-white/10 dark:bg-black/10 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium mb-2"
//                 >
//                   Message
//                 </label>
//                 <Textarea
//                   id="message"
//                   name="message"
//                   rows={5}
//                   required
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   placeholder="Tell me about your project..."
//                   className="bg-white/10 dark:bg-black/10 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
//                 />
//               </div>

//               <Button
//                 type="submit"
//                 disabled={contactMutation.isPending}
//                 className="w-full bg-gradient-to-r from-primary to-purple-600 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25"
//               >
//                 <span className="flex items-center gap-2">
//                   {contactMutation.isPending ? (
//                     <Loader2 className="w-4 h-4 animate-spin" />
//                   ) : (
//                     <Send className="w-4 h-4" />
//                   )}
//                   {contactMutation.isPending ? "Sending..." : "Send Message"}
//                 </span>
//               </Button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
