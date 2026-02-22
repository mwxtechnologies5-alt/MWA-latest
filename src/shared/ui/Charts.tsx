"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface AnimatedBarChartProps {
  data: { label: string; value: number; color?: string }[];
  title?: string;
  maxValue?: number;
  className?: string;
}

export function AnimatedBarChart({ data, title, maxValue, className = "" }: AnimatedBarChartProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const max = maxValue || Math.max(...data.map(d => d.value));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`p-6 rounded-2xl bg-card/40 border border-[#8b5cf6]/10 ${className}`}>
      {title && <h3 className="text-sm font-semibold text-foreground mb-4 font-heading">{title}</h3>}
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground font-body">{item.label}</span>
              <span className="text-foreground font-medium">{item.value}%</span>
            </div>
            <div className="h-2 bg-[#8b5cf6]/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: item.color || "#8b5cf6" }}
                initial={{ width: 0 }}
                animate={{ width: isVisible ? `${(item.value / max) * 100}%` : 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface AnimatedPieChartProps {
  data: { label: string; value: number; color: string }[];
  title?: string;
  size?: number;
  className?: string;
}

export function AnimatedPieChart({ data, title, size = 160, className = "" }: AnimatedPieChartProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const total = data.reduce((sum, d) => sum + d.value, 0);
  const radius = size / 2 - 10;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  let cumulativePercent = 0;

  return (
    <div ref={ref} className={`p-6 rounded-2xl bg-card/40 border border-[#8b5cf6]/10 ${className}`}>
      {title && <h3 className="text-sm font-semibold text-foreground mb-4 text-center font-heading">{title}</h3>}
      <div className="flex flex-col items-center">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <circle cx={size/2} cy={size/2} r={radius} fill="none" stroke="#8b5cf6" strokeWidth="2" opacity="0.1" />
          {data.map((segment, index) => {
            const percent = segment.value / total;
            const strokeDasharray = circumference * percent;
            const strokeDashoffset = circumference * (1 - percent);
            const rotation = cumulativePercent * 360 - 90;
            cumulativePercent += percent;

            return (
              <motion.circle
                key={index}
                cx={size/2}
                cy={size/2}
                r={radius}
                fill="none"
                stroke={segment.color}
                strokeWidth="16"
                strokeLinecap="round"
                strokeDasharray={`${strokeDasharray} ${circumference}`}
                transform={`rotate(${rotation} ${size/2} ${size/2})`}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset: isVisible ? strokeDashoffset : circumference }}
                transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
              />
            );
          })}
        </svg>
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-[10px] text-muted-foreground font-body">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface AnimatedLineChartProps {
  data: { label: string; value: number }[];
  title?: string;
  color?: string;
  className?: string;
}

export function AnimatedLineChart({ data, title, color = "#8b5cf6", className = "" }: AnimatedLineChartProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const width = 280;
  const height = 120;
  const padding = 20;
  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const points = data.map((d, i) => ({
    x: padding + (i * (width - 2 * padding)) / (data.length - 1),
    y: height - padding - ((d.value - minValue) / (maxValue - minValue)) * (height - 2 * padding),
  }));

  const pathD = points.reduce((path, point, i) => {
    if (i === 0) return `M ${point.x} ${point.y}`;
    const prev = points[i - 1];
    const cp1x = prev.x + (point.x - prev.x) / 3;
    const cp2x = point.x - (point.x - prev.x) / 3;
    return `${path} C ${cp1x} ${prev.y}, ${cp2x} ${point.y}, ${point.x} ${point.y}`;
  }, "");

  const areaPath = `${pathD} L ${points[points.length - 1].x} ${height - padding} L ${padding} ${height - padding} Z`;

  return (
    <div ref={ref} className={`p-6 rounded-2xl bg-card/40 border border-[#8b5cf6]/10 ${className}`}>
      {title && <h3 className="text-sm font-semibold text-foreground mb-4 font-heading">{title}</h3>}
      <svg width="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3].map(i => (
          <line
            key={i}
            x1={padding}
            y1={padding + (i * (height - 2 * padding)) / 3}
            x2={width - padding}
            y2={padding + (i * (height - 2 * padding)) / 3}
            stroke="#8b5cf6"
            strokeWidth="0.5"
            opacity="0.1"
          />
        ))}
        <motion.path
          d={areaPath}
          fill="url(#lineGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.path
          d={pathD}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isVisible ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        {points.map((point, i) => (
          <motion.circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="#0a0a12"
            stroke={color}
            strokeWidth="2"
            initial={{ scale: 0 }}
            animate={{ scale: isVisible ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
          />
        ))}
      </svg>
      <div className="flex justify-between mt-2">
        {data.map((d, i) => (
          <span key={i} className="text-[9px] text-muted-foreground font-body">{d.label}</span>
        ))}
      </div>
    </div>
  );
}

interface AnimatedDonutChartProps {
  value: number;
  maxValue?: number;
  title?: string;
  subtitle?: string;
  color?: string;
  size?: number;
  className?: string;
}

export function AnimatedDonutChart({ value, maxValue = 100, title, subtitle, color = "#8b5cf6", size = 120, className = "" }: AnimatedDonutChartProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const radius = size / 2 - 12;
  const circumference = 2 * Math.PI * radius;
  const percent = value / maxValue;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`p-4 rounded-2xl bg-card/40 border border-[#8b5cf6]/10 flex flex-col items-center ${className}`}>
      <div className="relative">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <circle
            cx={size/2}
            cy={size/2}
            r={radius}
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="8"
            opacity="0.1"
          />
          <motion.circle
            cx={size/2}
            cy={size/2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            transform={`rotate(-90 ${size/2} ${size/2})`}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: isVisible ? circumference * (1 - percent) : circumference }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <motion.span
            className="text-xl font-bold text-foreground font-heading"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {value}%
          </motion.span>
        </div>
      </div>
      {title && <span className="text-xs font-medium text-foreground mt-2 font-heading">{title}</span>}
      {subtitle && <span className="text-[10px] text-muted-foreground font-body">{subtitle}</span>}
    </div>
  );
}

interface ROICalculatorProps {
  className?: string;
}

export function ROICalculator({ className = "" }: ROICalculatorProps) {
  const [investment, setInvestment] = useState(10000);
  const [months, setMonths] = useState(6);
  const avgROI = 3.5;
  const projectedReturn = investment * avgROI;
  const monthlyGrowth = ((projectedReturn - investment) / months);

  return (
    <div className={`p-6 rounded-2xl bg-card/40 border border-[#8b5cf6]/10 ${className}`}>
      <h3 className="text-sm font-semibold text-foreground mb-4 font-heading">ROI Calculator</h3>
      <div className="space-y-4">
        <div>
          <label className="text-xs text-muted-foreground font-body block mb-2">Investment Amount</label>
          <input
            type="range"
            min="1000"
            max="100000"
            step="1000"
            value={investment}
            onChange={(e) => setInvestment(Number(e.target.value))}
            className="w-full h-2 bg-[#8b5cf6]/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-[#8b5cf6] [&::-webkit-slider-thumb]:rounded-full"
          />
          <div className="flex justify-between text-xs mt-1">
            <span className="text-muted-foreground">$1K</span>
            <span className="text-[#8b5cf6] font-semibold">${(investment/1000).toFixed(0)}K</span>
            <span className="text-muted-foreground">$100K</span>
          </div>
        </div>
        <div>
          <label className="text-xs text-muted-foreground font-body block mb-2">Campaign Duration</label>
          <div className="flex gap-2">
            {[3, 6, 12].map(m => (
              <button
                key={m}
                onClick={() => setMonths(m)}
                className={`flex-1 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  months === m
                    ? "bg-[#8b5cf6] text-white"
                    : "bg-[#8b5cf6]/10 text-muted-foreground hover:bg-[#8b5cf6]/20"
                }`}
              >
                {m} mo
              </button>
            ))}
          </div>
        </div>
        <div className="pt-4 border-t border-[#8b5cf6]/10">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-muted-foreground">Projected Return</span>
            <span className="text-lg font-bold text-[#8b5cf6]">${projectedReturn.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">Monthly Growth</span>
            <span className="text-sm font-semibold text-green-400">+${monthlyGrowth.toLocaleString()}/mo</span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface GrowthMetricProps {
  label: string;
  value: string;
  change: number;
  icon?: React.ReactNode;
  className?: string;
}

export function GrowthMetric({ label, value, change, icon, className = "" }: GrowthMetricProps) {
  const isPositive = change >= 0;

  return (
    <motion.div
      className={`p-4 rounded-xl bg-card/40 border border-[#8b5cf6]/10 ${className}`}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-start justify-between mb-2">
        <span className="text-xs text-muted-foreground font-body">{label}</span>
        {icon && <div className="text-[#8b5cf6]">{icon}</div>}
      </div>
      <div className="flex items-end gap-2">
        <span className="text-2xl font-bold text-foreground font-heading">{value}</span>
        <span className={`text-xs font-medium ${isPositive ? "text-green-400" : "text-red-400"}`}>
          {isPositive ? "+" : ""}{change}%
        </span>
      </div>
    </motion.div>
  );
}

interface AnimatedRadarChartProps {
  data: { label: string; value: number }[];
  title?: string;
  color?: string;
  size?: number;
  className?: string;
}

export function AnimatedRadarChart({ data, title, color = "#8b5cf6", size = 200, className = "" }: AnimatedRadarChartProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const center = size / 2;
  const radius = size / 2 - 30;
  const angleStep = (2 * Math.PI) / data.length;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const points = data.map((d, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const r = (d.value / 100) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
      labelX: center + (radius + 15) * Math.cos(angle),
      labelY: center + (radius + 15) * Math.sin(angle),
    };
  });

  const pathD = points.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(" ") + " Z";

  return (
    <div ref={ref} className={`p-6 rounded-2xl bg-card/40 border border-[#8b5cf6]/10 ${className}`}>
      {title && <h3 className="text-sm font-semibold text-foreground mb-4 text-center font-heading">{title}</h3>}
      <svg width="100%" viewBox={`0 0 ${size} ${size}`} preserveAspectRatio="xMidYMid meet">
        {[0.25, 0.5, 0.75, 1].map((scale, i) => (
          <polygon
            key={i}
            points={data.map((_, j) => {
              const angle = j * angleStep - Math.PI / 2;
              const r = scale * radius;
              return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
            }).join(" ")}
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="0.5"
            opacity="0.2"
          />
        ))}
        {data.map((_, i) => {
          const angle = i * angleStep - Math.PI / 2;
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={center + radius * Math.cos(angle)}
              y2={center + radius * Math.sin(angle)}
              stroke="#8b5cf6"
              strokeWidth="0.5"
              opacity="0.2"
            />
          );
        })}
        <motion.polygon
          points={points.map(p => `${p.x},${p.y}`).join(" ")}
          fill={color}
          fillOpacity="0.2"
          stroke={color}
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          style={{ transformOrigin: `${center}px ${center}px` }}
        />
        {points.map((p, i) => (
          <motion.circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="4"
            fill="#0a0a12"
            stroke={color}
            strokeWidth="2"
            initial={{ scale: 0 }}
            animate={{ scale: isVisible ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
          />
        ))}
        {points.map((p, i) => (
          <text
            key={i}
            x={p.labelX}
            y={p.labelY}
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-muted-foreground text-[8px] font-body"
          >
            {data[i].label}
          </text>
        ))}
      </svg>
    </div>
  );
}

interface ComparisonBarProps {
  label: string;
  before: number;
  after: number;
  unit?: string;
  className?: string;
}

export function ComparisonBar({ label, before, after, unit = "", className = "" }: ComparisonBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const increase = ((after - before) / before) * 100;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`p-4 rounded-xl bg-card/40 border border-[#8b5cf6]/10 ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs text-foreground font-medium font-heading">{label}</span>
        <span className="text-xs text-green-400 font-semibold">+{increase.toFixed(0)}%</span>
      </div>
      <div className="flex gap-2 items-end">
        <div className="flex-1">
          <div className="text-[10px] text-muted-foreground mb-1">Before</div>
          <div className="h-6 bg-[#8b5cf6]/20 rounded overflow-hidden">
            <motion.div
              className="h-full bg-[#8b5cf6]/50"
              initial={{ width: 0 }}
              animate={{ width: isVisible ? `${(before / after) * 100}%` : 0 }}
              transition={{ duration: 0.6 }}
            />
          </div>
          <div className="text-xs text-muted-foreground mt-1">{before}{unit}</div>
        </div>
        <div className="flex-1">
          <div className="text-[10px] text-muted-foreground mb-1">After</div>
          <div className="h-6 bg-[#8b5cf6]/20 rounded overflow-hidden">
            <motion.div
              className="h-full bg-[#8b5cf6]"
              initial={{ width: 0 }}
              animate={{ width: isVisible ? "100%" : 0 }}
              transition={{ duration: 0.8 }}
            />
          </div>
          <div className="text-xs text-foreground font-semibold mt-1">{after}{unit}</div>
        </div>
      </div>
    </div>
  );
}
