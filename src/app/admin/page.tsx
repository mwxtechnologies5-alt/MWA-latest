"use client";

import { useEffect, useState } from "react";
import {
  collection,
  query,
  orderBy,
  getDocs,
  Timestamp,
} from "firebase/firestore/lite";
import { db } from "@/lib/firebase";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/shared/animations/AnimatedSection";
import { ParallaxBackground } from "@/shared/animations/ParallaxSection";
import {
  Mail,
  Briefcase,
  DollarSign,
  Clock,
  MapPin,
  Search,
  Lock,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/shared/ui/Button";

type Submission = {
  id: string;
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  createdAt?: Timestamp;
};

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

  // Check authentication status on mount
  useEffect(() => {
    const authStatus = sessionStorage.getItem("adminAuth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    } else {
      setLoading(false); // Stop loading if they just hit the login page
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated) return;

    const fetchSubmissions = async () => {
      setLoading(true);
      try {
        const q = query(
          collection(db, "contactSubmissions"),
          orderBy("createdAt", "desc"),
        );
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Submission[];
        setSubmissions(data);
      } catch (error) {
        console.error("Error fetching submissions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "id-admin@gmail.com" && password === "MWX@admin") {
      setIsAuthenticated(true);
      sessionStorage.setItem("adminAuth", "true");
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0d0d14] flex items-center justify-center p-6 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#8b5cf6]/10 to-[#ff00aa]/5 rounded-full blur-[180px]" />
        </div>

        <motion.div
          className="w-full max-w-md relative z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shrink-0">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8b5cf6]/20 to-[#ff00aa]/20 border border-white/10 flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8 text-white relative z-10" />
            </div>

            <h2 className="text-3xl font-bold text-center mb-2">Admin Panel</h2>
            <p className="text-white/40 text-sm text-center mb-8">
              Sign in to view form submissions.
            </p>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-white/40 text-xs uppercase tracking-widest mb-2">
                  Admin ID
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0a0f] border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-[#00f0ff]/50 transition-colors text-sm"
                  placeholder="admin@example.com"
                />
              </div>

              <div>
                <label className="block text-white/40 text-xs uppercase tracking-widest mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0a0f] border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-[#8b5cf6]/50 transition-colors text-sm"
                  placeholder="••••••••"
                />
              </div>

              {loginError && (
                <div className="text-[#ff00aa] text-sm text-center bg-[#ff00aa]/10 py-2 rounded-lg border border-[#ff00aa]/20">
                  Invalid credentials. Please try again.
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Access Dashboard
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#0d0d14]">
      {/* ── HEADER ── */}
      <ParallaxBackground
        overlay={false}
        className="min-h-[40vh] flex items-center justify-center bg-gradient-dark pt-20"
      >
        <div className="text-center px-6">
          <motion.span
            className="text-[#00f0ff] text-sm font-medium tracking-widest uppercase mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Admin Dashboard
          </motion.span>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gradient">Form Submissions</span>
          </motion.h1>
          <motion.p
            className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Manage and view all client contact requests and career applications.
          </motion.p>
        </div>
      </ParallaxBackground>

      {/* ── TABLE / LIST ── */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            {loading ? (
              <div className="flex justify-center py-20">
                <div className="w-12 h-12 border-4 border-[#8b5cf6]/30 border-t-[#8b5cf6] rounded-full animate-spin"></div>
              </div>
            ) : submissions.length === 0 ? (
              <div className="text-center py-20 text-white/40">
                No submissions found.
              </div>
            ) : (
              <div className="grid gap-6">
                {submissions.map((sub, idx) => (
                  <motion.div
                    key={sub.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00f0ff]/30 transition-all flex flex-col lg:flex-row gap-8"
                  >
                    {/* Left Info */}
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-[#8b5cf6]/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-[#8b5cf6] font-bold text-lg">
                            {sub.name?.charAt(0).toUpperCase() || "?"}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {sub.name || "Anonymous"}
                          </h3>
                          {sub.email && (
                            <a
                              href={`mailto:${sub.email}`}
                              className="text-[#00f0ff] text-sm hover:underline flex items-center gap-1 mt-1"
                            >
                              <Mail className="w-3 h-3" /> {sub.email}
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-white/50 pt-2">
                        {sub.company && (
                          <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                            <Briefcase className="w-3.5 h-3.5" />
                            {sub.company}
                          </span>
                        )}
                        {sub.service && (
                          <span className="flex items-center gap-1.5 bg-[#8b5cf6]/10 text-[#a78bfa] border border-[#8b5cf6]/20 px-3 py-1.5 rounded-lg">
                            <MapPin className="w-3.5 h-3.5" />
                            {sub.service}
                          </span>
                        )}
                        {sub.budget && (
                          <span className="flex items-center gap-1.5 bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/20 px-3 py-1.5 rounded-lg">
                            <DollarSign className="w-3.5 h-3.5" />
                            {sub.budget}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Right Message */}
                    <div className="flex-1 lg:max-w-xl bg-[#0a0a0f] rounded-xl p-5 border border-white/5 relative">
                      <div className="absolute top-4 right-4 text-white/20 text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {sub.createdAt?.toDate ? (
                          <>
                            {sub.createdAt.toDate().toLocaleDateString()}{" "}
                            {sub.createdAt.toDate().toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </>
                        ) : (
                          "N/A"
                        )}
                      </div>
                      <h4 className="text-white/40 text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Search className="w-3 h-3" />
                        Project Details
                      </h4>
                      <p className="text-sm text-white/70 leading-relaxed whitespace-pre-wrap">
                        {sub.message || "No message provided."}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
