"use client"

import { useEffect, useRef } from "react"

export function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      radius: number
      dx: number
      dy: number
      alpha: number
      growing: boolean
      color: string
      connections: number[]
    }> = []

    const colors = [
      { r: 0, g: 255, b: 242 }, // Cyan
      { r: 255, g: 215, b: 0 }, // Gold
      { r: 255, g: 255, b: 255 }, // White
    ]

    for (let i = 0; i < 200; i++) {
      const colorIndex = Math.floor(Math.random() * colors.length)
      const { r, g, b } = colors[colorIndex]

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5, // Reduced initial alpha for dimmer effect
        growing: Math.random() > 0.5,
        color: `rgb(${r}, ${g}, ${b})`,
        connections: [],
      })
    }

    function drawParticleConnections(particle: (typeof particles)[0], index: number) {
      particles.forEach((p2, i2) => {
        if (index === i2) return

        const dx = particle.x - p2.x
        const dy = particle.y - p2.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          const alpha = (1 - distance / 150) * 0.15 * particle.alpha * p2.alpha // Reduced connection opacity
          ctx!.beginPath()
          ctx!.strokeStyle = `rgba(0, 255, 242, ${alpha})`
          ctx!.lineWidth = 0.5
          ctx!.moveTo(particle.x, particle.y)
          ctx!.lineTo(p2.x, p2.y)
          ctx!.stroke()
        }
      })
    }

    function animate() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)" // Increased trail effect for dimmer background
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        particle.x += particle.dx
        particle.y += particle.dy

        if (particle.growing) {
          particle.alpha += 0.01
          if (particle.alpha >= 0.5) particle.growing = false // Reduced max alpha
        } else {
          particle.alpha -= 0.01
          if (particle.alpha <= 0.1) particle.growing = true // Reduced min alpha
        }

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1

        drawParticleConnections(particle, index)

        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius * 3,
        )
        gradient.addColorStop(0, `rgba${particle.color.slice(3, -1)}, ${particle.alpha * 0.7})`) // Reduced glow intensity
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius * 2, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius * 0.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.alpha * 0.7})` // Reduced center brightness
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} />
      <div className="fixed inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/80 to-slate-900/90 pointer-events-none" />
    </>
  )
}

