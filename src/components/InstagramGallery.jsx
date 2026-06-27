import React, { useState, useEffect } from 'react'
import { Instagram, ExternalLink, Film, Image, X } from 'lucide-react'

const INSTAGRAM_TOKEN = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN

export default function InstagramGallery() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedPost, setSelectedPost] = useState(null)

  useEffect(() => {
    fetchInstagramPosts()
  }, [])

  async function fetchInstagramPosts() {
    try {
      setLoading(true)
      const response = await fetch(
        `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&limit=12&access_token=${INSTAGRAM_TOKEN}`
      )
      if (!response.ok) throw new Error('Error al cargar posts')
      const data = await response.json()
      if (data.error) throw new Error(data.error.message)
      setPosts(data.data || [])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  function formatDate(timestamp) {
    return new Date(timestamp).toLocaleDateString('es-CR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  if (loading) {
    return (
      <section id="galeria" className="py-24 bg-[#EEF4F8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold tracking-widest uppercase"
              style={{ background: 'rgba(91,161,48,0.10)', border: '1px solid rgba(91,161,48,0.22)', color: '#5BA130' }}>
              <Instagram size={14} />
              Instagram
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#203478] leading-tight mb-4">
              Nuestros <span style={{ color: '#5BA130' }}>Trabajos</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-square bg-white/60 rounded-2xl animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error || posts.length === 0) {
    return (
      <section id="galeria" className="py-24 bg-[#EEF4F8]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold tracking-widest uppercase"
            style={{ background: 'rgba(91,161,48,0.10)', border: '1px solid rgba(91,161,48,0.22)', color: '#5BA130' }}>
            <Instagram size={14} />
            Instagram
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#203478] leading-tight mb-4">
            Nuestros <span style={{ color: '#5BA130' }}>Trabajos</span>
          </h2>
          <p className="text-[#5a6a82] text-lg max-w-2xl mx-auto font-light mb-8">
            Cada proyecto refleja calidad, tecnología y dedicación. Síguenos para ver más.
          </p>
          <a
            href="https://www.instagram.com/polarizadospolaritech/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#5BA130] text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 hover:-translate-y-0.5"
            style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.5px' }}
          >
            <Instagram size={18} />
            Ver en Instagram
            <ExternalLink size={14} />
          </a>
        </div>
      </section>
    )
  }

  return (
    <section id="galeria" className="py-24 bg-[#EEF4F8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold tracking-widest uppercase"
            style={{ background: 'rgba(91,161,48,0.10)', border: '1px solid rgba(91,161,48,0.22)', color: '#5BA130' }}>
            <Instagram size={14} />
            Instagram
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#203478] leading-tight mb-4">
            Nuestros <span style={{ color: '#5BA130' }}>Trabajos</span>
          </h2>
          <p className="text-[#5a6a82] text-lg max-w-2xl mx-auto font-light">
            Cada proyecto refleja calidad, tecnología y dedicación. Síguenos para ver más.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.map((post) => (
            <button
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}
                alt={post.caption?.slice(0, 60) || 'Post de Instagram'}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white text-left">
                  {post.caption && (
                    <p className="text-xs line-clamp-2 leading-tight">{post.caption.slice(0, 80)}</p>
                  )}
                  <p className="text-[10px] text-white/70 mt-1">{formatDate(post.timestamp)}</p>
                </div>
              </div>
              {post.media_type === 'VIDEO' && (
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full p-1.5">
                  <Film size={14} className="text-white" />
                </div>
              )}
              {post.media_type === 'CAROUSEL_ALBUM' && (
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full p-1.5">
                  <Image size={14} className="text-white" />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/polarizadospolaritech/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#5BA130] text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 hover:-translate-y-0.5"
            style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.5px' }}
          >
            <Instagram size={18} />
            Seguir en Instagram
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="relative bg-white rounded-3xl overflow-hidden max-w-2xl w-full max-h-[90vh] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 backdrop-blur-sm text-white rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              <X size={18} />
            </button>
            <img
              src={selectedPost.media_type === 'VIDEO' ? selectedPost.thumbnail_url : selectedPost.media_url}
              alt={selectedPost.caption?.slice(0, 60) || 'Post de Instagram'}
              className="w-full max-h-[60vh] object-contain bg-gray-100"
            />
            <div className="p-6">
              {selectedPost.caption && (
                <p className="text-sm text-[#5a6a82] leading-relaxed mb-4 max-h-24 overflow-y-auto">
                  {selectedPost.caption}
                </p>
              )}
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">{formatDate(selectedPost.timestamp)}</span>
                <a
                  href={selectedPost.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Instagram size={16} />
                  Ver en Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
