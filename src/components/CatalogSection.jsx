import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { catalogItems } from '../data/catalogData';
import confetti from 'canvas-confetti';
import { 
  Search, 
  Filter, 
  ShoppingBag, 
  Star, 
  Info, 
  X, 
  Check, 
  Layers, 
  ArrowUpDown,
  Tag
} from 'lucide-react';

export default function CatalogSection() {
  const { userRole, mode, addToCart, t } = useApp();

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [selectedItemForModal, setSelectedItemForModal] = useState(null);
  const [addedItemIds, setAddedItemIds] = useState([]);

  const categories = [
    { id: 'all', label: t('catalog.allCategory') },
    { id: 'produce', label: t('catalog.produceCategory') },
    { id: 'seeds', label: t('catalog.seedsCategory') },
    { id: 'machinery', label: t('catalog.machineryCategory') },
    { id: 'spares', label: t('catalog.sparesCategory') }
  ];

  const filteredItems = useMemo(() => {
    return catalogItems
      .filter(item => {
        const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
        const itemName = t(`catalog.items.${item.key}`).toLowerCase();
        const matchesSearch = !searchQuery || 
          itemName.includes(searchQuery.toLowerCase()) ||
          item.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'priceAsc') return a.price - b.price;
        if (sortBy === 'priceDesc') return b.price - a.price;
        if (sortBy === 'ratingDesc') return b.rating - a.rating;
        return 0;
      });
  }, [selectedCategory, searchQuery, sortBy, t]);

  const handleAddToCart = (item) => {
    confetti({ particleCount: 40, spread: 45, origin: { y: 0.7 } });
    addToCart(item);
    setAddedItemIds(prev => [...prev, item.id]);
    setTimeout(() => {
      setAddedItemIds(prev => prev.filter(id => id !== item.id));
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-300">
      
      {/* Catalog Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 mb-2">
            <Tag className="w-3.5 h-3.5 text-emerald-600" />
            <span>53 Verified Verified Agricultural SKUs</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('catalog.title')}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            {t('catalog.subtitle')}
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('catalog.searchPlaceholder')}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white shadow-sm"
          />
        </div>
      </div>

      {/* Categories & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <span className="text-xs text-slate-500 font-semibold">{t('catalog.sortBy')}:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 focus:outline-none"
          >
            <option value="default">Featured</option>
            <option value="priceAsc">{t('catalog.priceAsc')}</option>
            <option value="priceDesc">{t('catalog.priceDesc')}</option>
            <option value="ratingDesc">{t('catalog.ratingDesc')}</option>
          </select>
        </div>
      </div>

      {/* Catalog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => {
          const isAdded = addedItemIds.includes(item.id);
          const localizedName = t(`catalog.items.${item.key}`);

          return (
            <div 
              key={item.id}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container with Fallback */}
                <div className="relative aspect-video sm:aspect-square overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={item.image}
                    alt={localizedName}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80";
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-sm text-[10px] font-extrabold uppercase text-white tracking-wider">
                    {item.category}
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-amber-500 text-slate-950 text-[10px] font-black flex items-center gap-1 shadow-sm">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{item.rating}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 space-y-2">
                  <h4 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white leading-snug line-clamp-1">
                    {localizedName}
                  </h4>
                  <p className="text-xs text-slate-500 flex items-center gap-1">
                    <span>{t('catalog.origin')}:</span>
                    <strong className="text-slate-700 dark:text-slate-300 font-semibold">{item.origin}</strong>
                  </p>

                  {/* Easy vs Detailed Specs */}
                  {mode === 'detailed' && item.specs && (
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 space-y-0.5">
                      {Object.entries(item.specs).slice(0, 2).map(([k, v]) => (
                        <div key={k} className="flex justify-between">
                          <span className="capitalize">{k}:</span>
                          <span className="font-semibold text-slate-800 dark:text-slate-200">{v}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Price & Action Footer */}
              <div className="p-5 pt-0 flex items-center justify-between gap-2">
                <div>
                  <div className="text-[10px] font-bold uppercase text-slate-400">Price</div>
                  <div className="font-extrabold text-base sm:text-lg text-emerald-700 dark:text-emerald-400">
                    ₹{item.price.toLocaleString('en-IN')}{' '}
                    <span className="text-[10px] text-slate-500 font-normal">/ {item.unit}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setSelectedItemForModal(item)}
                    className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors"
                    title="View Technical Specifications"
                  >
                    <Info className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleAddToCart(item)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                      isAdded 
                        ? 'bg-emerald-600 text-white' 
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20'
                    }`}
                  >
                    {isAdded ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
                    <span>{userRole === 'buyer' && item.category === 'produce' ? t('catalog.requestQuote') : t('catalog.addToCart')}</span>
                  </button>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Specifications Modal */}
      {selectedItemForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
            <div className="relative aspect-video bg-slate-950">
              <img
                src={selectedItemForModal.image}
                alt={t(`catalog.items.${selectedItemForModal.key}`)}
                className="w-full h-full object-cover opacity-90"
              />
              <button
                onClick={() => setSelectedItemForModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/70 text-white hover:bg-slate-950 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  {selectedItemForModal.category}
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  {t(`catalog.items.${selectedItemForModal.key}`)}
                </h3>
                <p className="text-xs text-slate-500 mt-1">Origin: {selectedItemForModal.origin}</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 space-y-2">
                <div className="font-extrabold text-xs text-slate-900 dark:text-white uppercase tracking-wider">
                  {t('catalog.specsTitle')}
                </div>
                {selectedItemForModal.specs && Object.entries(selectedItemForModal.specs).map(([k, v]) => (
                  <div key={k} className="flex justify-between text-xs py-1 border-b border-slate-100 dark:border-slate-700/50 last:border-0">
                    <span className="capitalize text-slate-500">{k}:</span>
                    <strong className="text-slate-800 dark:text-slate-200">{v}</strong>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="font-black text-xl text-emerald-700 dark:text-emerald-400">
                  ₹{selectedItemForModal.price.toLocaleString('en-IN')}{' '}
                  <span className="text-xs text-slate-500 font-normal">/ {selectedItemForModal.unit}</span>
                </div>
                <button
                  onClick={() => {
                    handleAddToCart(selectedItemForModal);
                    setSelectedItemForModal(null);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md"
                >
                  {t('catalog.buyNow')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
