import { useEffect, useState } from 'react';
import './App.css'
import heroImg from './assets/hero-cat-real.jpg'
import eatingCatImg from './assets/eating-cat.png'
import productSasami from './assets/product-sasami.png'

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "🐱 商品について",
      answer: "国産ささみを使用したフリーズドライフードです。保存料・着色料・香料は一切使用しておりません。猫用・犬用としてご利用いただけます。"
    },
    {
      id: 2,
      question: "📦 配送について",
      answer: "ご注文から3〜5営業日以内に発送いたします。送料は全国一律500円、5,000円以上のご購入で送料無料となります。"
    },
    {
      id: 3,
      question: "🔄 返品・交換について",
      answer: "商品到着後7日以内であれば、未開封の商品に限り返品・交換を承ります。お客様都合の返品の場合、送料はお客様負担となります。"
    },
    {
      id: 4,
      question: "💾 保存方法は？",
      answer: "直射日光・高温多湿を避け、冷暗所で保管してください。開封後は密閉容器に入れ、お早めにお召し上がりください。"
    },
    {
      id: 5,
      question: "📧 お問い合わせ",
      answer: "ご不明な点がございましたら、info@nextlifecat.comまでお気軽にお問い合わせください。2営業日以内にご返信いたします。"
    }
  ];

  // Smooth scroll effect handling could go here
  useEffect(() => {
    // Just a placeholder for potential scroll animations
  }, []);

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="logo font-serif">来世は猫</div>
        <nav className="nav">
          <a href="#philosophy" className="nav-link">Our Philosophy</a>
          <a href="#products" className="nav-link">Products</a>
          <a href="#journal" className="nav-link">Journal</a>
        </nav>
        <div className="header-actions">
          <button className="icon-btn">
            {/* Search Icon */}
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          <button className="icon-btn">
            {/* Bag Icon */}
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-bg">
            <img src={heroImg} alt="Beautiful Cat" />
            <div className="overlay"></div>
          </div>
          <div className="hero-content">
            <p className="hero-subtitle font-serif">PREMIUM ORGANIC CAT FOOD</p>
            <h1>
              あなたの猫が<br />
              もう一度<br />
              猫に生まれたくなる食事
            </h1>
            <p className="hero-description">
              添加物不使用。100%ヒューマングレード。<br />
              自然の恵みをそのまま、愛猫の明日の活力に。
            </p>
            <button className="btn-primary">商品を見る</button>
          </div>

          <div className="scroll-indicator">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
          </div>
        </section>

        {/* Philosophy Section */}
        <section id="philosophy" className="philosophy">
          <div className="section-header">
            <h2 className="section-title font-serif">OUR PHILOSOPHY</h2>
            <div className="title-underline"></div>
          </div>

          <div className="philosophy-content">
            <div className="philosophy-text-wrapper">
              <h3 className="philosophy-heading">
                「食べる」ことは、<br />
                「生きる」こと。
              </h3>

              <div className="philosophy-text">
                <p>猫は言葉を話せません。だからこそ、私たちは食事を通して猫の声に耳を傾けます。</p>
                <p>「来世は猫」のフードは、国産ささみを使用。安心して健康的なフードをモットーに、1つ1つ愛を込めて作っています。大切な愛猫もきっと喜ぶはず。</p>
                <p>一口食べた瞬間の、あの満足げな表情。それが私たちの約束です。</p>
              </div>
            </div>

            <div className="philosophy-image">
              <img src={eatingCatImg} alt="Cat eating premium food" />
            </div>
          </div>
        </section>

        {/* Products Placeholder */}
        <section id="products" className="products">
          <div className="container">
            <h2 className="section-title-large font-serif">Collection</h2>
            <p className="section-subtitle">厳選された食材のシンフォニー</p>

            <div className="products-grid">
              {/* Product Card: Sasami */}
              <div className="product-card">
                <div className="product-image">
                  <img src={productSasami} alt="フリーズドライ無添加国産ササミ" />
                </div>
                <div className="product-info">
                  <div className="product-badge">CHICKEN</div>
                  <h3 className="product-name">フリーズドライ<br />無添加 国産ササミ</h3>
                  <p className="product-description">
                    保存料・着色料・香料・不使用。<br />
                    猫用・犬用
                  </p>
                  <div className="product-footer">
                    <span className="product-price">¥770<span style={{ fontSize: '0.7rem', fontWeight: 'normal', marginLeft: '0.3rem', opacity: 0.7 }}>（税込）</span></span>
                    <button className="btn-add-to-cart">カートに追加</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer slide-in">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h2 className="logo font-serif">来世は猫</h2>
              <p>大切な愛猫に、もう一度生まれたくなるような喜びを。</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="demo-notice">※こちらのサイトは開発中のデモページです。実際の商品販売は行っておりません。</p>
            <p className="copyright">© 2026 来世は猫 - Next Life Cat. All rights reserved.</p>
          </div>
        </div>
      </footer>
      {/* Floating Chat Button */}
      {/* Chat Window */}
      {isChatOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-info">
              <span className="chat-status-dot"></span>
              <h3>「来世は猫」FAQ助手</h3>
            </div>
            <button className="chat-close-btn" onClick={() => setIsChatOpen(false)}>×</button>
          </div>
          <div className="chat-body">
            {!selectedFaq ? (
              <>
                <p className="chat-welcome">こんにちは！何かお手伝いしましょうか？よくある質問を選択してください。</p>
                <div className="faq-list">
                  {faqs.map(faq => (
                    <button
                      key={faq.id}
                      className="faq-item-btn"
                      onClick={() => setSelectedFaq(faq)}
                    >
                      {faq.question}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="faq-answer-view">
                <button className="back-btn" onClick={() => setSelectedFaq(null)}>← 戻る</button>
                <div className="faq-question-bubble">{selectedFaq.question}</div>
                <div className="faq-answer-bubble">{selectedFaq.answer}</div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating Chat Button */}
      <button className="floating-chat-btn" onClick={() => setIsChatOpen(!isChatOpen)}>
        {!isChatOpen && <div className="notification-dot"></div>}
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {isChatOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <>
              <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <path d="M9 9h.01" />
              <path d="M15 9h.01" />
            </>
          )}
        </svg>
      </button>
    </div>
  )
}

export default App
