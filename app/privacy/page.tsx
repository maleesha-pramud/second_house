"use client"

import { Header } from "@/components/header"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Shield,
  Lock,
  Eye,
  Camera,
  Key,
  UserCheck,
  MapPin,
  Wifi,
  Phone,
  FileText,
  CheckCircle,
  AlertTriangle,
  Home,
  ArrowRight,
  Star,
  Heart,
  Users,
  Clock,
  Award,
} from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export default function PrivacyPage() {
  const { t } = useLanguage()

  const privacyFeatures = [
    {
      icon: <Lock className="h-6 w-6" />,
      title: { en: "Secure Entry System", si: "ආරක්ෂිත ප්‍රවේශ පද්ධතිය" },
      description: {
        en: "Individual key cards and secure locks for each room ensure only you have access during your stay",
        si: "සෑම කාමරයක්ම සඳහා පුද්ගලික යතුරු කාඩ්පත් සහ ආරක්ෂිත අගුල් ඔබගේ නවාතැන් කාලය තුළ ඔබට පමණක් ප්‍රවේශය සහතික කරයි",
      },
      features: [
        { en: "Digital key card system", si: "ඩිජිටල් යතුරු කාඩ්පත් පද්ධතිය" },
        { en: "24/7 secure access", si: "24/7 ආරක්ෂිත ප්‍රවේශය" },
        { en: "Individual room codes", si: "පුද්ගලික කාමර කේත" },
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: { en: "No Surveillance in Rooms", si: "කාමර තුළ නිරීක්ෂණයක් නැත" },
      description: {
        en: "We guarantee zero surveillance devices inside guest rooms. Your privacy is completely protected",
        si: "අමුත්තන්ගේ කාමර තුළ නිරීක්ෂණ උපකරණ ශුන්‍ය බව අපි සහතික කරමු. ඔබගේ පෞද්ගලිකත්වය සම්පූර්ණයෙන්ම ආරක්ෂා වේ",
      },
      features: [
        { en: "No hidden cameras", si: "සැඟවුණු කැමරා නැත" },
        { en: "No audio recording", si: "ශ්‍රව්‍ය පටිගත කිරීමක් නැත" },
        { en: "Complete room privacy", si: "සම්පූර්ණ කාමර පෞද්ගලිකත්වය" },
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: { en: "Guest Data Protection", si: "අමුත්තන්ගේ දත්ත ආරක්ෂණය" },
      description: {
        en: "Your personal information is encrypted and stored securely. We never share your data with third parties",
        si: "ඔබගේ පුද්ගලික තොරතුරු සංකේතනය කර ආරක්ෂිතව ගබඩා කරනු ලැබේ. අපි කිසි විටෙකත් ඔබගේ දත්ත තෙවන පාර්ශ්වයන් සමඟ බෙදා නොගනිමු",
      },
      features: [
        { en: "Encrypted data storage", si: "සංකේතිත දත්ත ගබඩාව" },
        { en: "No third-party sharing", si: "තෙවන පාර්ශ්ව බෙදාගැනීමක් නැත" },
        { en: "GDPR compliant", si: "GDPR අනුකූල" },
      ],
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: { en: "Secure Location", si: "ආරක්ෂිත ස්ථානය" },
      description: {
        en: "Located in a safe residential area with 24/7 security presence and well-lit surroundings",
        si: "24/7 ආරක්ෂක පැමිණීම සහ හොඳින් ආලෝකමත් වටපිටාව සහිත ආරක්ෂිත නේවාසික ප්‍රදේශයක පිහිටා ඇත",
      },
      features: [
        { en: "Safe neighborhood", si: "ආරක්ෂිත අසල්වැසි ප්‍රදේශය" },
        { en: "24/7 area security", si: "24/7 ප්‍රදේශ ආරක්ෂාව" },
        { en: "Well-lit pathways", si: "හොඳින් ආලෝකමත් මාර්ග" },
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: { en: "Secure WiFi Network", si: "ආරක්ෂිත WiFi ජාලය" },
      description: {
        en: "Private, encrypted WiFi networks for each room with no activity logging or monitoring",
        si: "ක්‍රියාකාරකම් ලොග් කිරීමක් හෝ නිරීක්ෂණයක් නොමැතිව සෑම කාමරයක්ම සඳහා පුද්ගලික, සංකේතිත WiFi ජාල",
      },
      features: [
        { en: "WPA3 encryption", si: "WPA3 සංකේතනය" },
        { en: "No browsing logs", si: "බ්‍රවුසිං ලොග් නැත" },
        { en: "Private network access", si: "පුද්ගලික ජාල ප්‍රවේශය" },
      ],
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: { en: "Transparent Policies", si: "විනිවිද පෙනෙන ප්‍රතිපත්ති" },
      description: {
        en: "Clear, easy-to-understand privacy policies with no hidden clauses or confusing terms",
        si: "සැඟවුණු වගන්ති හෝ ව්‍යාකූල නියමයන් නොමැතිව පැහැදිලි, තේරුම් ගැනීමට පහසු පෞද්ගලිකත්ව ප්‍රතිපත්ති",
      },
      features: [
        { en: "Plain language policies", si: "සරල භාෂා ප්‍රතිපත්ති" },
        { en: "No hidden terms", si: "සැඟවුණු නියමයන් නැත" },
        { en: "Regular updates", si: "නිතිපතා යාවත්කාලීන" },
      ],
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
    },
  ]

  const securityMeasures = [
    {
      icon: <Shield className="h-5 w-5" />,
      title: { en: "Physical Security", si: "භෞතික ආරක්ෂාව" },
      items: [
        { en: "Secure building access", si: "ආරක්ෂිත ගොඩනැගිලි ප්‍රවේශය" },
        { en: "Individual room locks", si: "පුද්ගලික කාමර අගුල්" },
        { en: "Emergency contact system", si: "හදිසි සම්බන්ධතා පද්ධතිය" },
      ],
    },
    {
      icon: <Camera className="h-5 w-5" />,
      title: { en: "Common Area Security", si: "පොදු ප්‍රදේශ ආරක්ෂාව" },
      items: [
        { en: "CCTV in common areas only", si: "පොදු ප්‍රදේශවල පමණක් CCTV" },
        { en: "No bedroom surveillance", si: "නිදන කාමර නිරීක්ෂණයක් නැත" },
        { en: "Privacy-focused monitoring", si: "පෞද්ගලිකත්වය කේන්ද්‍ර කරගත් නිරීක්ෂණය" },
      ],
    },
    {
      icon: <Key className="h-5 w-5" />,
      title: { en: "Access Control", si: "ප්‍රවේශ පාලනය" },
      items: [
        { en: "Unique access codes", si: "අද්විතීය ප්‍රවේශ කේත" },
        { en: "Time-limited access", si: "කාල සීමිත ප්‍රවේශය" },
        { en: "Secure key management", si: "ආරක්ෂිත යතුරු කළමනාකරණය" },
      ],
    },
  ]

  const trustIndicators = [
    {
      icon: <Star className="h-5 w-5 text-yellow-500" />,
      value: "4.9/5",
      label: { en: "Privacy Rating", si: "පෞද්ගලිකත්ව ශ්‍රේණිගත කිරීම" },
    },
    {
      icon: <Users className="h-5 w-5 text-blue-500" />,
      value: "500+",
      label: { en: "Trusted Guests", si: "විශ්වාසදායක අමුත්තන්" },
    },
    {
      icon: <Clock className="h-5 w-5 text-green-500" />,
      value: "2+ Years",
      label: { en: "Zero Incidents", si: "සිදුවීම් ශුන්‍ය" },
    },
    {
      icon: <Award className="h-5 w-5 text-purple-500" />,
      value: "Certified",
      label: { en: "Privacy Standards", si: "පෞද්ගලිකත්ව ප්‍රමිති" },
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="container mx-auto px-4 py-16 md:py-20 relative">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-6 py-3 text-sm border border-white/20 mb-4">
              <Shield className="h-5 w-5" />
              <span className="font-medium">
                {t("language") === "si" ? "ඔබගේ පෞද්ගලිකත්වය අපගේ ප්‍රමුඛතාවයයි" : "Your Privacy is Our Priority"}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              {t("language") === "si" ? "පෞද්ගලිකත්වය සහ ආරක්ෂාව" : "Privacy & Security"}
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              {t("language") === "si"
                ? "ඔබගේ පෞද්ගලිකත්වය, ආරක්ෂාව සහ සුවපහසුව සහතික කිරීම සඳහා අපි ගන්නා සියලුම පියවර ගැන දැන ගන්න"
                : "Learn about all the measures we take to ensure your privacy, security, and peace of mind during your stay"}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  {indicator.icon}
                  <span className="text-2xl md:text-3xl font-bold text-gray-800">{indicator.value}</span>
                </div>
                <p className="text-sm text-gray-600">{indicator.label[t("language") === "si" ? "si" : "en"]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              {t("language") === "si" ? "ඔබගේ පෞද්ගලිකත්වය ආරක්ෂා කරන ආකාරය" : "How We Protect Your Privacy"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("language") === "si"
                ? "ඔබගේ නවාතැන් කාලය තුළ සම්පූර්ණ පෞද්ගලිකත්වය සහ ආරක්ෂාව සහතික කිරීම සඳහා අපගේ සවිස්තරාත්මක ප්‍රවේශය"
                : "Our comprehensive approach to ensuring complete privacy and security during your stay"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {privacyFeatures.map((feature, index) => (
              <Card
                key={index}
                className={`overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${feature.borderColor} border-2`}
              >
                <CardContent className="p-0">
                  {/* Header */}
                  <div className={`p-6 ${feature.bgColor}`}>
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} text-white flex items-center justify-center flex-shrink-0 shadow-lg`}
                      >
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 text-lg mb-2">
                          {feature.title[t("language") === "si" ? "si" : "en"]}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {feature.description[t("language") === "si" ? "si" : "en"]}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="p-6 pt-4">
                    <div className="space-y-3">
                      {feature.features.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-3">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item[t("language") === "si" ? "si" : "en"]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              {t("language") === "si" ? "ආරක්ෂක පියවර" : "Security Measures"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("language") === "si"
                ? "ඔබගේ ආරක්ෂාව සහතික කිරීම සඳහා අපි ක්‍රියාත්මක කරන බහුස්තර ආරක්ෂක පද්ධති"
                : "Multi-layered security systems we implement to ensure your safety"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {securityMeasures.map((measure, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center text-white">
                      {measure.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800">
                      {measure.title[t("language") === "si" ? "si" : "en"]}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {measure.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{item[t("language") === "si" ? "si" : "en"]}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Commitment */}
      <section className="py-16 bg-gradient-to-br from-green-500 to-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-10 w-10" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              {t("language") === "si" ? "අපගේ පෞද්ගලිකත්ව ප්‍රතිඥාව" : "Our Privacy Commitment"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-200 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      {t("language") === "si" ? "සම්පූර්ණ පෞද්ගලිකත්වය" : "Complete Privacy"}
                    </h3>
                    <p className="text-green-100 text-sm">
                      {t("language") === "si"
                        ? "ඔබගේ කාමරය ඔබගේ පුද්ගලික අවකාශයයි. කිසිදු නිරීක්ෂණයක් නැත."
                        : "Your room is your private space. No surveillance whatsoever."}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-200 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">{t("language") === "si" ? "දත්ත ආරක්ෂණය" : "Data Protection"}</h3>
                    <p className="text-green-100 text-sm">
                      {t("language") === "si"
                        ? "ඔබගේ පුද්ගලික තොරතුරු සංකේතනය කර ආරක්ෂිතව ගබඩා කරනු ලැබේ."
                        : "Your personal information is encrypted and securely stored."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-200 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      {t("language") === "si" ? "විනිවිද පෙනෙන ප්‍රතිපත්ති" : "Transparent Policies"}
                    </h3>
                    <p className="text-green-100 text-sm">
                      {t("language") === "si"
                        ? "සරල, පැහැදිලි ප්‍රතිපත්ති සැඟවුණු නියමයන් නොමැතිව."
                        : "Simple, clear policies with no hidden terms or conditions."}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-200 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">{t("language") === "si" ? "24/7 සහාය" : "24/7 Support"}</h3>
                    <p className="text-green-100 text-sm">
                      {t("language") === "si"
                        ? "ඕනෑම කාලයක ඔබගේ ආරක්ෂාව සහ සුවපහසුව සඳහා සහාය."
                        : "Support available anytime for your safety and peace of mind."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-amber-50 border-t border-amber-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-amber-200 shadow-sm">
              <AlertTriangle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-amber-800 mb-2">
                  {t("language") === "si" ? "වැදගත් දැනුම්දීම" : "Important Notice"}
                </h3>
                <p className="text-amber-700 text-sm leading-relaxed mb-4">
                  {t("language") === "si"
                    ? "ඔබගේ පෞද්ගලිකත්වය ගැන කිසියම් සැකයක් හෝ ප්‍රශ්නයක් ඇත්නම්, කරුණාකර පැමිණීමට පෙර අප සමඟ සම්බන්ධ වන්න. අපි සෑම ප්‍රශ්නයකටම පැහැදිලි පිළිතුරු ලබා දීමට සතුටු වෙමු."
                    : "If you have any concerns or questions about your privacy, please contact us before your arrival. We're happy to provide clear answers to every question."}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                    <Link href="tel:+94XXXXXXXXX" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      {t("language") === "si" ? "අමතන්න" : "Call Us"}
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-amber-300 text-amber-700 hover:bg-amber-50"
                  >
                    <Link href="/#rooms">{t("language") === "si" ? "කාමර බලන්න" : "View Rooms"}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-warm-500 to-sunset-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {t("language") === "si" ? "ආරක්ෂිත නවාතැනක් සඳහා සූදානම්ද?" : "Ready for a Secure Stay?"}
            </h2>
            <p className="text-warm-100 mb-8">
              {t("language") === "si"
                ? "සම්පූර්ණ පෞද්ගලිකත්වය සහ ආරක්ෂාව සහිත ඔබගේ පරිපූර්ණ නවාතැන වෙන්කරවා ගන්න"
                : "Book your perfect stay with complete privacy and security guaranteed"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg" className="bg-white text-warm-600 hover:bg-warm-50">
                <Link href="/#rooms" className="flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  {t("language") === "si" ? "කාමර බලන්න" : "View Rooms"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/">{t("language") === "si" ? "මුල් පිටුවට" : "Back to Home"}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
